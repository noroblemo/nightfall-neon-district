#!/usr/bin/env python3
"""Build the NIGHTFALL light-cycle GLB from Blender.

Run headless:
  /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup \
      --python tools/build_bike.py -- --render

The bike is authored facing -Y in Blender, which the glTF exporter maps to
+Z in Three.js.  Wheel axle centres sit at z = 0.55; wheel pivots rotate about
their local X axis (roll) and the front pivot about local Y (steer).
"""

import bpy
import bmesh
import math
import os
import sys
from mathutils import Euler, Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "bike.glb")
PREVIEW_DIR = os.path.join(ROOT, "previews")
RENDER = "--render" in sys.argv
FPS = 30
AXLE_Z = 0.55
FRONT_Y = -0.70
REAR_Y = 0.70


# ---------------------------------------------------------------------------
# helpers
# ---------------------------------------------------------------------------
def srgb(hex_value):
    h = hex_value.lstrip("#")
    rgb = [int(h[i:i + 2], 16) / 255.0 for i in (0, 2, 4)]
    return tuple(c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in rgb)


def material(name, hex_value, roughness=0.6, metallic=0.2, emission=None, emission_strength=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    base = srgb(hex_value)
    bsdf.inputs["Base Color"].default_value = (*base, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if emission:
        bsdf.inputs["Emission Color"].default_value = (*srgb(emission), 1.0)
        bsdf.inputs["Emission Strength"].default_value = emission_strength
    mat.use_backface_culling = False
    return mat


def active(obj):
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)


def shade(obj, smooth=True):
    for poly in obj.data.polygons:
        poly.use_smooth = smooth


def apply_transforms(obj):
    active(obj)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)


def bevel(obj, width, segments=2, angle=40.0):
    if width <= 0:
        return
    mod = obj.modifiers.new("bevel", "BEVEL")
    mod.width = width
    mod.segments = segments
    mod.limit_method = "ANGLE"
    mod.angle_limit = math.radians(angle)
    active(obj)
    bpy.ops.object.modifier_apply(modifier=mod.name)


def cube(name, size, loc, mat, rot=(0, 0, 0), bevel_width=0.01):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    obj = bpy.context.object
    obj.name = name
    obj.scale = size
    active(obj)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.rotation_euler = Euler(rot, "XYZ")
    apply_transforms(obj)
    bevel(obj, bevel_width)
    shade(obj, False)
    obj.data.materials.append(mat)
    return obj


def cylinder(name, radius, depth, loc, mat, rot=(0, 0, 0), vertices=20):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius, depth=depth, location=loc)
    obj = bpy.context.object
    obj.name = name
    obj.rotation_euler = Euler(rot, "XYZ")
    apply_transforms(obj)
    shade(obj, True)
    obj.data.materials.append(mat)
    return obj


def torus(name, major, minor, loc, mat, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=major, minor_radius=minor,
        major_segments=36, minor_segments=10, location=loc,
    )
    obj = bpy.context.object
    obj.name = name
    obj.rotation_euler = Euler(rot, "XYZ")
    apply_transforms(obj)
    shade(obj, True)
    obj.data.materials.append(mat)
    return obj


def capsule(name, p1, p2, r1, r2, mat, vertices=12):
    a = Vector(p1)
    b = Vector(p2)
    direction = b - a
    parts = []
    for point, radius in ((a, r1), (b, r2)):
        bpy.ops.mesh.primitive_uv_sphere_add(
            segments=vertices, ring_count=max(8, vertices // 2), radius=radius, location=point,
        )
        parts.append(bpy.context.object)
    # Stretch a cylinder between the two spheres so long strips stay straight.
    bpy.ops.mesh.primitive_cone_add(
        vertices=vertices, radius1=r1, radius2=r2,
        depth=direction.length, location=(a + b) * 0.5,
    )
    mid = bpy.context.object
    mid.rotation_mode = "QUATERNION"
    mid.rotation_quaternion = direction.to_track_quat("Z", "Y")
    apply_transforms(mid)
    parts.append(mid)
    bpy.ops.object.select_all(action="DESELECT")
    for part in parts:
        part.select_set(True)
    active(parts[0])
    bpy.ops.object.join()
    obj = bpy.context.object
    obj.name = name
    obj.data.name = name
    shade(obj, True)
    obj.data.materials.append(mat)
    return obj


def loft_y(name, rings, mat, chamfer=0.035):
    """Chamfered rectangular cross-sections lofted along the bike's Y axis."""
    verts = []
    faces = []
    for y, w, zb, zt in rings:
        c = min(chamfer, w * 0.4, (zt - zb) * 0.35)
        section = [
            (w, zb + c), (w - c, zb), (-w + c, zb), (-w, zb + c),
            (-w, zt - c), (-w + c, zt), (w - c, zt), (w, zt - c),
        ]
        for x, z in section:
            verts.append((x, y, z))
    n = 8
    for ring in range(len(rings) - 1):
        for i in range(n):
            a = ring * n + i
            b = ring * n + (i + 1) % n
            c_ = (ring + 1) * n + (i + 1) % n
            d = (ring + 1) * n + i
            faces.append((a, b, c_, d))
    faces.append(tuple(range(n - 1, -1, -1)))
    faces.append(tuple((len(rings) - 1) * n + i for i in range(n)))
    mesh = bpy.data.meshes.new(name)
    mesh.from_pydata(verts, [], faces)
    mesh.validate()
    mesh.update()
    bm = bmesh.new()
    bm.from_mesh(mesh)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    shade(obj, True)
    obj.data.materials.append(mat)
    return obj


def empty(name, loc, parent=None, parent_inverse=False):
    obj = bpy.data.objects.new(name, None)
    bpy.context.collection.objects.link(obj)
    obj.location = loc
    bpy.context.view_layer.update()
    if parent:
        obj.parent = parent
        if parent_inverse:
            obj.matrix_parent_inverse = parent.matrix_world.inverted()
    return obj


def parent_keep_world(obj, parent):
    """Attach a world-space mesh to an animated pivot without moving it."""
    bpy.context.view_layer.update()
    obj.parent = parent
    obj.matrix_parent_inverse = parent.matrix_world.inverted()


# ---------------------------------------------------------------------------
# build
# ---------------------------------------------------------------------------
def materials():
    return {
        "frame": material("BK_Frame", "#101724", roughness=0.3, metallic=0.78,
                          emission="#070d18", emission_strength=0.25),
        "tire": material("BK_Tire", "#080a0f", roughness=0.9, metallic=0.04),
        "accent": material("BK_Accent", "#08242d", roughness=0.34, metallic=0.3,
                           emission="#2fd8ff", emission_strength=1.6),
        "glow": material("BK_Glow", "#0b303c", roughness=0.25, metallic=0.2,
                         emission="#78f6ff", emission_strength=3.0),
    }


def build_wheel(pivot, mat, name):
    """Wheel geometry is local to the pivot so local-X rolling works."""
    axis = (0, math.pi / 2, 0)
    tire = torus(f"{name}_tire", 0.48, 0.07, (0, 0, 0), mat["tire"], axis)
    tire.parent = pivot
    rim = torus(f"{name}_rim", 0.40, 0.022, (0, 0, 0), mat["frame"], axis)
    rim.parent = pivot
    glow = torus(f"{name}_rim_glow", 0.455, 0.011, (0, 0, 0), mat["glow"], axis)
    glow.parent = pivot
    hub = cylinder(f"{name}_hub", 0.085, 0.20, (0, 0, 0), mat["frame"], axis, vertices=18)
    hub.parent = pivot
    disc = cylinder(f"{name}_disc", 0.29, 0.014, (0, 0, 0), mat["frame"], axis, vertices=24)
    disc.parent = pivot
    for i in range(8):
        angle = math.tau * i / 8
        y = math.cos(angle) * 0.37
        z = math.sin(angle) * 0.37
        spoke = capsule(f"{name}_spoke_{i}", (0, 0, 0), (0, y, z), 0.014, 0.010, mat["frame"])
        spoke.parent = pivot


def build_bike():
    mat = materials()
    bpy.context.view_layer.update()

    rig = empty("BK_Rig", (0, 0, 0))
    body = empty("BK_Body", (0, 0, AXLE_Z), parent=rig)
    front = empty("wheel_front", (0, FRONT_Y, AXLE_Z), parent=rig)
    rear = empty("wheel_rear", (0, REAR_Y, AXLE_Z), parent=rig)
    glow_root = empty("BK_AccentGlow", (0, 0, 0), parent=body)
    bpy.context.view_layer.update()

    body_parts = []
    body_parts.append(loft_y("BK_Chassis", [
        (-1.12, 0.09, 0.52, 0.62),
        (-0.95, 0.19, 0.44, 0.72),
        (-0.62, 0.30, 0.38, 0.80),
        (-0.20, 0.38, 0.40, 0.82),
        (0.35, 0.40, 0.42, 0.84),
        (0.78, 0.33, 0.46, 0.90),
        (1.05, 0.18, 0.52, 0.80),
        (1.18, 0.08, 0.58, 0.68),
    ], mat["frame"], chamfer=0.045))

    # Wide low side pods give the 0.8 m stance.
    for side in (-1, 1):
        body_parts.append(cube(f"BK_SidePod_{side}", (0.12, 1.55, 0.22),
                               (side * 0.34, 0.05, 0.57), mat["frame"], bevel_width=0.035))
        body_parts.append(cube(f"BK_SidePodLight_{side}", (0.012, 1.35, 0.025),
                               (side * 0.402, 0.04, 0.60), mat["accent"], bevel_width=0.004))
        body_parts.append(capsule(f"BK_FrontFork_{side}",
                                  (side * 0.10, FRONT_Y, AXLE_Z),
                                  (side * 0.17, -0.50, 0.84), 0.026, 0.022, mat["frame"]))
        body_parts.append(capsule(f"BK_RearSwingarm_{side}",
                                  (side * 0.11, REAR_Y, AXLE_Z),
                                  (side * 0.18, 0.42, 0.76), 0.032, 0.028, mat["frame"]))

    body_parts.append(cube("BK_Seat", (0.34, 0.52, 0.075), (0, 0.32, 0.845),
                           mat["tire"], bevel_width=0.03))
    body_parts.append(cube("BK_SeatBump", (0.22, 0.12, 0.06), (0, 0.62, 0.89),
                           mat["tire"], bevel_width=0.025))
    body_parts.append(cylinder("BK_Handlebar", 0.024, 0.64, (0, -0.50, 1.04),
                               mat["frame"], (0, math.pi / 2, 0), vertices=16))
    for side in (-1, 1):
        body_parts.append(cylinder(f"BK_Grip_{side}", 0.034, 0.13,
                                   (side * 0.285, -0.50, 1.04), mat["tire"],
                                   (0, math.pi / 2, 0), vertices=14))
        body_parts.append(capsule(f"BK_Riser_{side}",
                                  (side * 0.20, -0.44, 0.81),
                                  (side * 0.28, -0.50, 1.03), 0.022, 0.020, mat["frame"]))
    body_parts.append(cube("BK_FrontFender", (0.22, 0.52, 0.035), (0, FRONT_Y, 1.125),
                           mat["frame"], bevel_width=0.014))
    body_parts.append(cube("BK_RearFender", (0.22, 0.50, 0.035), (0, REAR_Y, 1.125),
                           mat["frame"], bevel_width=0.014))

    for obj in body_parts:
        parent_keep_world(obj, body)

    build_wheel(front, mat, "BK_FrontWheel")
    build_wheel(rear, mat, "BK_RearWheel")

    # Neon strips belong to BK_AccentGlow so the glow-pulse action can drive
    # them as one node while still allowing JS to recolour the materials.
    glow_parts = []
    ridge = [
        (0, -1.06, 0.655), (0, -0.76, 0.755), (0, -0.30, 0.835),
        (0, 0.30, 0.855), (0, 0.75, 0.905), (0, 1.08, 0.79),
    ]
    for i in range(len(ridge) - 1):
        glow_parts.append(capsule(f"BK_RidgeGlow_{i}", ridge[i], ridge[i + 1],
                                  0.011, 0.011, mat["glow"]))
    for side in (-1, 1):
        for i in range(5):
            y0 = -0.98 + i * 0.42
            glow_parts.append(capsule(f"BK_SideGlow_{side}_{i}",
                                      (side * 0.392, y0, 0.545),
                                      (side * 0.392, y0 + 0.38, 0.545),
                                      0.013, 0.013, mat["accent"]))
        glow_parts.append(capsule(f"BK_ForkGlow_{side}",
                                  (side * 0.13, FRONT_Y - 0.02, AXLE_Z + 0.16),
                                  (side * 0.18, -0.52, 0.83), 0.009, 0.009, mat["accent"]))
    glow_parts.append(cube("BK_NoseBlade", (0.15, 0.10, 0.022), (0, -1.13, 0.61),
                           mat["glow"], bevel_width=0.006))
    glow_parts.append(cube("BK_TailBar", (0.16, 0.05, 0.026), (0, 1.14, 0.65),
                           mat["glow"], bevel_width=0.006))
    for obj in glow_parts:
        parent_keep_world(obj, glow_root)

    return {
        "rig": rig, "body": body, "front": front, "rear": rear, "glow": glow_root,
        "objects": [rig, body, front, rear, glow_root] + body_parts + glow_parts,
    }


# ---------------------------------------------------------------------------
# animation
# ---------------------------------------------------------------------------
def action_fcurves(action):
    try:
        return list(action.fcurves)
    except AttributeError:
        curves = []
        for layer in action.layers:
            for strip in layer.strips:
                for bag in strip.channelbags:
                    curves.extend(bag.fcurves)
        return curves


def make_action(name, frames, pose_fn, nodes):
    action = bpy.data.actions.new(name)
    action.use_fake_user = True
    slots = {}
    for node_name in nodes:
        node = bpy.data.objects[node_name]
        slot = action.slots.new("OBJECT", node_name)
        slots[node_name] = slot
        node.animation_data_create()
        node.animation_data.action = action
        node.animation_data.action_slot = slot

    for frame in range(frames + 1):
        values = pose_fn(frame / frames)
        for node_name, channels in values.items():
            node = bpy.data.objects[node_name]
            if "location" in channels:
                node.location = channels["location"]
                node.keyframe_insert("location", frame=frame)
            if "rotation" in channels:
                node.rotation_euler = Euler(channels["rotation"], "XYZ")
                node.keyframe_insert("rotation_euler", frame=frame)
            if "scale" in channels:
                node.scale = channels["scale"]
                node.keyframe_insert("scale", frame=frame)

    for fcurve in action_fcurves(action):
        for key in fcurve.keyframe_points:
            key.interpolation = "LINEAR"

    # Muted NLA strips make the exporter see the action without double-playing.
    for node_name, slot in slots.items():
        node = bpy.data.objects[node_name]
        track = node.animation_data.nla_tracks.new()
        track.name = name
        strip = track.strips.new(name, 0, action)
        strip.name = name
        strip.action_slot = slot
        track.mute = True
        node.animation_data.action = None
    return action


NODES = ("BK_Body", "BK_AccentGlow")


def idle_pose(t):
    sway = math.sin(t * math.tau)
    return {
        "BK_Body": {
            "location": (0, 0, AXLE_Z + 0.005 * sway),
            "rotation": (0.003 * sway, 0, 0.002 * sway),
        },
        "BK_AccentGlow": {"scale": (1 + 0.02 * sway,) * 3},
    }


def ride_pose(t):
    bob = math.sin(t * math.tau)
    lean = math.sin(t * math.tau - 0.6)
    return {
        "BK_Body": {
            "location": (0, 0, AXLE_Z + 0.012 * bob),
            "rotation": (0.018 + 0.012 * lean, 0, 0.008 * math.sin(t * math.tau * 2)),
        },
        "BK_AccentGlow": {"scale": (1 + 0.03 * bob,) * 3},
    }


def boost_pose(t):
    pulse = 0.5 - 0.5 * math.cos(t * math.tau)
    return {
        "BK_Body": {
            "location": (0, 0, AXLE_Z - 0.022 * pulse + 0.006 * math.sin(t * math.tau * 2)),
            "rotation": (0.02 + 0.09 * pulse, 0, 0.012 * math.sin(t * math.tau * 2)),
        },
        "BK_AccentGlow": {"scale": (1 + 0.18 * pulse,) * 3},
    }


# ---------------------------------------------------------------------------
# export / preview
# ---------------------------------------------------------------------------
def export_glb():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.export_scene.gltf(
        filepath=OUT,
        export_format="GLB",
        use_selection=True,
        export_yup=True,
        export_apply=False,
        export_animations=True,
        export_animation_mode="ACTIONS",
        export_bake_animation=True,
        export_force_sampling=True,
        export_optimize_animation_size=True,
        export_materials="EXPORT",
        export_cameras=False,
        export_lights=False,
    )
    print("EXPORTED", OUT, os.path.getsize(OUT))


def setup_preview():
    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = 900
    scene.render.resolution_y = 600
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = False
    scene.render.image_settings.file_format = "PNG"
    scene.eevee.taa_render_samples = 24

    world = scene.world or bpy.data.worlds.new("World")
    scene.world = world
    world.use_nodes = True
    bg = world.node_tree.nodes.get("Background")
    bg.inputs[0].default_value = (0.006, 0.010, 0.022, 1)
    bg.inputs[1].default_value = 1.0

    bpy.ops.mesh.primitive_plane_add(size=30, location=(0, 0, 0))
    ground = bpy.context.object
    ground.name = "PreviewGround"
    ground.data.materials.append(material("BK_PreviewGround", "#060910", roughness=0.55, metallic=0.35))

    cam_data = bpy.data.cameras.new("PreviewCam")
    cam = bpy.data.objects.new("PreviewCam", cam_data)
    bpy.context.collection.objects.link(cam)
    cam.location = (2.9, -3.2, 2.0)
    target = Vector((0, 0, 0.62))
    cam.rotation_euler = (target - cam.location).to_track_quat("-Z", "Y").to_euler()
    cam_data.lens = 50
    scene.camera = cam

    def area(name, loc, energy, color, size):
        data = bpy.data.lights.new(name, "AREA")
        data.energy = energy
        data.color = color
        data.shape = "DISK"
        data.size = size
        obj = bpy.data.objects.new(name, data)
        bpy.context.collection.objects.link(obj)
        obj.location = loc
        obj.rotation_euler = (target - obj.location).to_track_quat("-Z", "Y").to_euler()

    area("Key", (2.5, -2.5, 3.6), 700, (0.72, 0.92, 1.0), 3.0)
    area("Fill", (-3.0, -1.5, 2.4), 320, (0.4, 0.6, 1.0), 3.0)
    area("Rim", (0.6, 3.2, 2.8), 620, (0.25, 0.9, 1.0), 2.5)
    return cam


def render_preview(action_name, frame):
    scene = bpy.context.scene
    action = bpy.data.actions[action_name]
    for node_name in NODES:
        node = bpy.data.objects[node_name]
        node.animation_data.action = action
        slot = next((s for s in action.slots if s.identifier.endswith(node_name)), None)
        if slot:
            node.animation_data.action_slot = slot
    scene.frame_set(frame)
    os.makedirs(PREVIEW_DIR, exist_ok=True)
    path = os.path.join(PREVIEW_DIR, f"bike_{action_name.lower()}_{frame:02d}.png")
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    print("PREVIEWED", path)


def main():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.context.scene.render.fps = FPS
    build = build_bike()

    make_action("Idle", 30, idle_pose, NODES)
    make_action("Ride", 24, ride_pose, NODES)
    make_action("Boost", 24, boost_pose, NODES)

    export_glb()
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT, "assets", "bike.blend"))

    if RENDER:
        setup_preview()
        render_preview("Ride", 0)
        render_preview("Boost", 12)


main()
