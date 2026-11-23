#!/usr/bin/env python3
"""Build the NIGHTFALL operator GLB from Blender.

Run headless:
  /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup \
      --python tools/build_operator.py

The character is authored facing -Y in Blender, which the glTF exporter maps
to +Z in Three.js (the game's forward axis). Feet sit on z = 0.
"""

import bpy
import bmesh
import math
import os
import sys
from mathutils import Euler, Matrix, Quaternion, Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "operator.glb")
PREVIEW_DIR = os.path.join(ROOT, "previews")
RENDER = "--render" in sys.argv
FPS = 30


# ---------------------------------------------------------------------------
# colour / material helpers
# ---------------------------------------------------------------------------
def srgb(hex_value):
    h = hex_value.lstrip("#")
    rgb = [int(h[i:i + 2], 16) / 255.0 for i in (0, 2, 4)]
    return tuple(c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in rgb)


def material(name, hex_value, roughness=0.6, metallic=0.2, emission=None, emission_strength=0.0):
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")
    base = srgb(hex_value)
    bsdf.inputs["Base Color"].default_value = (*base, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if emission:
        bsdf.inputs["Emission Color"].default_value = (*srgb(emission), 1.0)
        bsdf.inputs["Emission Strength"].default_value = emission_strength
    mat.use_backface_culling = False
    return mat


# ---------------------------------------------------------------------------
# geometry helpers
# ---------------------------------------------------------------------------
def active(obj):
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)


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


def shade(obj, smooth=True):
    for poly in obj.data.polygons:
        poly.use_smooth = smooth


def assign(obj, mat, bone):
    obj.data.materials.clear()
    obj.data.materials.append(mat)
    group = obj.vertex_groups.new(name=bone)
    group.add(list(range(len(obj.data.vertices))), 1.0, "REPLACE")


def cube(name, size, loc, mat, bone, rot=(0, 0, 0), bevel_width=0.015, smooth=False):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    obj = bpy.context.object
    obj.name = name
    obj.scale = size
    active(obj)
    # Scale and rotate around the part's own centre; baking the location first
    # would make the rotation swing the part around the world origin.
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.rotation_euler = Euler(rot, "XYZ")
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=False)
    bpy.ops.object.transform_apply(location=True, rotation=False, scale=False)
    bevel(obj, min(size) * 0.45 if bevel_width is None else bevel_width, 2)
    shade(obj, smooth)
    assign(obj, mat, bone)
    return obj


def sphere(name, radii, loc, mat, bone, segments=20, rings=12, smooth=True):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=segments, ring_count=rings, radius=1.0, location=loc)
    obj = bpy.context.object
    obj.name = name
    obj.scale = radii
    apply_transforms(obj)
    shade(obj, smooth)
    assign(obj, mat, bone)
    return obj


def cylinder(name, radius, depth, loc, mat, bone, rot=(0, 0, 0), vertices=18, smooth=True, bevel_width=0.0):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius, depth=depth, location=loc)
    obj = bpy.context.object
    obj.name = name
    obj.rotation_euler = Euler(rot, "XYZ")
    apply_transforms(obj)
    bevel(obj, bevel_width, 2)
    shade(obj, smooth)
    assign(obj, mat, bone)
    return obj


def capsule(name, p1, p2, r1, r2, mat, bone, vertices=18, smooth=True):
    a = Vector(p1)
    b = Vector(p2)
    direction = b - a
    length = direction.length
    mid = (a + b) * 0.5
    quat = direction.to_track_quat("Z", "Y")
    bpy.ops.mesh.primitive_cone_add(
        vertices=vertices, radius1=r1, radius2=r2, depth=length, location=mid,
    )
    obj = bpy.context.object
    obj.name = name
    obj.rotation_mode = "QUATERNION"
    obj.rotation_quaternion = quat
    apply_transforms(obj)
    shade(obj, smooth)

    ends = []
    for point, radius in ((a, r1), (b, r2)):
        bpy.ops.mesh.primitive_uv_sphere_add(segments=vertices, ring_count=max(8, vertices // 2), radius=radius, location=point)
        end = bpy.context.object
        shade(end, True)
        ends.append(end)
    active(obj)
    for end in ends:
        end.select_set(True)
    bpy.ops.object.join()
    obj = bpy.context.object
    obj.name = name
    assign(obj, mat, bone)
    return obj


def torus(name, major, minor, loc, mat, bone, rot=(math.pi / 2, 0, 0)):
    bpy.ops.mesh.primitive_torus_add(major_radius=major, minor_radius=minor, major_segments=20, minor_segments=8, location=loc)
    obj = bpy.context.object
    obj.name = name
    obj.rotation_euler = Euler(rot, "XYZ")
    apply_transforms(obj)
    shade(obj, True)
    assign(obj, mat, bone)
    return obj


def loft(name, rings, mat, bone, segments=20, smooth=True):
    """Closed elliptical loft. rings = [(z, radius_x, radius_y, y_offset), ...]."""
    verts = []
    faces = []
    for z, rx, ry, yoff in rings:
        for i in range(segments):
            angle = math.tau * i / segments
            verts.append((math.cos(angle) * rx, math.sin(angle) * ry + yoff, z))
    for ring in range(len(rings) - 1):
        for i in range(segments):
            a = ring * segments + i
            b = ring * segments + (i + 1) % segments
            c = (ring + 1) * segments + (i + 1) % segments
            d = (ring + 1) * segments + i
            faces.append((a, b, c, d))
    faces.append(tuple(range(segments - 1, -1, -1)))
    faces.append(tuple((len(rings) - 1) * segments + i for i in range(segments)))
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
    shade(obj, smooth)
    assign(obj, mat, bone)
    return obj


# ---------------------------------------------------------------------------
# rig
# ---------------------------------------------------------------------------
BONES = [
    # name, head, tail, parent, axis
    ("hips", (0, 0, 0.96), (0, 0, 1.08), None, "up"),
    ("spine", (0, 0, 1.08), (0, 0, 1.24), "hips", "up"),
    ("chest", (0, 0, 1.24), (0, 0, 1.48), "spine", "up"),
    ("neck", (0, 0, 1.48), (0, 0, 1.56), "chest", "up"),
    ("head", (0, 0, 1.56), (0, 0, 1.84), "neck", "up"),
    ("upper_arm_L", (-0.26, 0, 1.44), (-0.27, 0, 1.16), "chest", "down"),
    ("forearm_L", (-0.27, 0, 1.16), (-0.28, -0.01, 0.92), "upper_arm_L", "down"),
    ("hand_L", (-0.28, -0.01, 0.92), (-0.28, -0.02, 0.80), "forearm_L", "down"),
    ("upper_arm_R", (0.26, 0, 1.44), (0.27, 0, 1.16), "chest", "down"),
    ("forearm_R", (0.27, 0, 1.16), (0.28, -0.01, 0.92), "upper_arm_R", "down"),
    ("hand_R", (0.28, -0.01, 0.92), (0.28, -0.02, 0.80), "forearm_R", "down"),
    ("thigh_L", (-0.115, 0, 0.96), (-0.12, 0, 0.54), "hips", "down"),
    ("shin_L", (-0.12, 0, 0.54), (-0.12, 0, 0.14), "thigh_L", "down"),
    ("foot_L", (-0.12, 0, 0.14), (-0.12, 0, 0.03), "shin_L", "down"),
    ("thigh_R", (0.115, 0, 0.96), (0.12, 0, 0.54), "hips", "down"),
    ("shin_R", (0.12, 0, 0.54), (0.12, 0, 0.14), "thigh_R", "down"),
    ("foot_R", (0.12, 0, 0.14), (0.12, 0, 0.03), "shin_R", "down"),
    ("muzzle", (0.33, -0.69, 0.9), (0.33, -0.75, 0.9), "hand_R", "forward"),
]

UP_ROLL = Vector((0, -1, 0))
DOWN_ROLL = Vector((0, 1, 0))
FWD_ROLL = Vector((0, 0, -1))


def build_rig():
    arm_data = bpy.data.armatures.new("NF_OperatorRig")
    rig = bpy.data.objects.new("NF_OperatorRig", arm_data)
    bpy.context.collection.objects.link(rig)
    active(rig)
    bpy.ops.object.mode_set(mode="EDIT")
    made = {}
    for name, head, tail, parent, axis in BONES:
        bone = arm_data.edit_bones.new(name)
        bone.head = head
        bone.tail = tail
        bone.use_connect = False
        if axis == "up":
            bone.align_roll(UP_ROLL)
        elif axis == "down":
            bone.align_roll(DOWN_ROLL)
        else:
            bone.align_roll(FWD_ROLL)
        made[name] = bone
    for name, _head, _tail, parent, _axis in BONES:
        if parent:
            made[name].parent = made[parent]
    bpy.ops.object.mode_set(mode="OBJECT")
    return rig


# ---------------------------------------------------------------------------
# character mesh
# ---------------------------------------------------------------------------
def build_operator(rig):
    suit = material("NF_Suit", "#343c4e", roughness=0.72, metallic=0.12, emission="#0e1520", emission_strength=0.5)
    pants = material("NF_Pants", "#23262f", roughness=0.82, metallic=0.06, emission="#0a0d14", emission_strength=0.45)
    armor = material("NF_Armor", "#596375", roughness=0.45, metallic=0.45, emission="#0b111a", emission_strength=0.25)
    dark = material("NF_Rubber", "#11141b", roughness=0.8, metallic=0.08)
    metal = material("NF_Metal", "#8b98ad", roughness=0.32, metallic=0.8)
    helmet_shell = material("NF_Helmet", "#151a26", roughness=0.24, metallic=0.55, emission="#0a1220", emission_strength=0.35)
    lens = material("NF_Lens", "#04070d", roughness=0.14, metallic=0.6, emission="#041018", emission_strength=0.3)
    accent = material("NF_Accent", "#0a2a31", roughness=0.35, metallic=0.3, emission="#35e9ff", emission_strength=1.6)
    visor = material("NF_Visor", "#07151b", roughness=0.08, metallic=0.72, emission="#63f7ff", emission_strength=2.0)

    parts = []

    # Lean athletic torso built from lofted rings: broad shoulders, narrow
    # waist, and a separate pelvis so the spine can bend naturally.
    parts.append(loft("pelvis", [
        (0.88, 0.145, 0.10, 0.0),
        (0.95, 0.17, 0.12, 0.005),
        (1.02, 0.165, 0.115, 0.0),
        (1.08, 0.15, 0.105, 0.0),
    ], pants, "hips"))
    parts.append(loft("waist", [
        (1.07, 0.15, 0.105, 0.0),
        (1.14, 0.138, 0.096, 0.0),
        (1.20, 0.148, 0.102, 0.0),
        (1.25, 0.165, 0.112, 0.0),
    ], pants, "spine"))
    parts.append(loft("chest", [
        (1.24, 0.175, 0.12, 0.0),
        (1.32, 0.20, 0.135, -0.005),
        (1.39, 0.218, 0.145, 0.0),
        (1.45, 0.205, 0.135, 0.005),
        (1.49, 0.15, 0.105, 0.0),
    ], suit, "chest"))

    # chest armour and rig
    parts.append(cube("chest_plate", (0.27, 0.055, 0.19), (0, -0.14, 1.36), armor, "chest", bevel_width=0.025))
    parts.append(cube("chest_bar", (0.10, 0.014, 0.02), (0, -0.171, 1.43), accent, "chest", bevel_width=0.004))
    parts.append(cube("zip_light", (0.013, 0.012, 0.10), (0, -0.171, 1.35), accent, "chest", bevel_width=0.003))
    for side in (-1, 1):
        parts.append(cube(f"rig_strap_{side}", (0.035, 0.025, 0.30), (side * 0.095, -0.15, 1.31), dark, "chest", bevel_width=0.007))
        parts.append(cube(f"pouch_{side}", (0.085, 0.055, 0.10), (side * 0.095, -0.155, 1.19), armor, "chest", bevel_width=0.014))
    parts.append(cube("belt", (0.30, 0.19, 0.07), (0, 0, 1.04), armor, "hips", bevel_width=0.018))
    for side in (-1, 1):
        parts.append(cube(f"hip_pouch_{side}", (0.08, 0.065, 0.12), (side * 0.155, -0.02, 1.0), dark, "hips", bevel_width=0.014))
    parts.append(cube("buckle", (0.06, 0.028, 0.045), (0, -0.115, 1.04), metal, "hips", bevel_width=0.007))

    # backpack
    parts.append(cube("backpack", (0.26, 0.13, 0.30), (0, 0.165, 1.35), armor, "chest", bevel_width=0.03))
    parts.append(cube("pack_light", (0.13, 0.018, 0.02), (0, 0.235, 1.42), accent, "chest", bevel_width=0.004))
    for side in (-1, 1):
        parts.append(cylinder(f"canister_{side}", 0.028, 0.22, (side * 0.095, 0.222, 1.32), dark, "chest", rot=(0, 0, 0), vertices=12))

    # high collar and neck
    parts.append(loft("collar", [
        (1.45, 0.125, 0.105, 0.0),
        (1.50, 0.118, 0.095, 0.0),
        (1.55, 0.105, 0.085, 0.0),
    ], suit, "chest"))
    parts.append(torus("collar_trim", 0.10, 0.008, (0, 0, 1.555), accent, "chest", rot=(0, 0, 0)))
    parts.append(cylinder("neck", 0.055, 0.12, (0, 0, 1.545), dark, "neck", vertices=14))

    # Tron-style full-face helmet: dark glossy shell, wraparound lens, and
    # thin player-coloured light lines over the crown, brow, visor and chin.
    parts.append(sphere("helmet_shell", (0.158, 0.182, 0.192), (0, 0.008, 1.72), helmet_shell, "head", segments=36, rings=24))
    parts.append(loft("helmet_chin", [
        (1.58, 0.075, 0.09, -0.045),
        (1.61, 0.105, 0.13, -0.055),
        (1.66, 0.13, 0.155, -0.035),
        (1.70, 0.142, 0.168, -0.01),
    ], helmet_shell, "head", segments=28))
    parts.append(sphere("visor_lens", (0.135, 0.118, 0.072), (0, -0.07, 1.72), lens, "head", segments=48, rings=32))

    # brow light wraps around the front of the shell
    for p1, p2, r in (
        ((-0.055, -0.166, 1.775), (0.055, -0.166, 1.775), 0.006),
        ((-0.108, -0.122, 1.772), (-0.055, -0.160, 1.775), 0.006),
        ((0.055, -0.160, 1.775), (0.108, -0.122, 1.772), 0.006),
        ((-0.14, -0.062, 1.762), (-0.108, -0.122, 1.772), 0.0055),
        ((0.108, -0.122, 1.772), (0.14, -0.062, 1.762), 0.0055),
    ):
        parts.append(capsule("brow_light", p1, p2, r, r, accent, "head"))

    # crown light running front-to-back
    for p1, p2 in (
        ((0, -0.166, 1.782), (0, -0.145, 1.825)),
        ((0, -0.145, 1.825), (0, -0.118, 1.858)),
        ((0, -0.118, 1.858), (0, -0.085, 1.884)),
        ((0, -0.085, 1.884), (0, -0.02, 1.902)),
        ((0, -0.02, 1.902), (0, 0.06, 1.902)),
        ((0, 0.06, 1.902), (0, 0.13, 1.865)),
        ((0, 0.13, 1.865), (0, 0.18, 1.80)),
    ):
        parts.append(capsule("crest_light", p1, p2, 0.0065, 0.0065, accent, "head"))

    # visor scan line follows the curved lens
    for p1, p2 in (
        ((0, -0.19, 1.724), (0.07, -0.174, 1.724)),
        ((0.07, -0.174, 1.724), (0.12, -0.127, 1.724)),
        ((-0.07, -0.174, 1.724), (0, -0.19, 1.724)),
        ((-0.12, -0.127, 1.724), (-0.07, -0.174, 1.724)),
    ):
        parts.append(capsule("visor_light", p1, p2, 0.006, 0.006, visor, "head"))

    # chin light
    for side in (-1, 1):
        parts.append(capsule(f"chin_light_{side}", (0, -0.194, 1.635), (side * 0.05, -0.162, 1.652), 0.005, 0.005, accent, "head"))

    # ear pods with glowing rims
    for side in (-1, 1):
        parts.append(cylinder(f"ear_pod_{side}", 0.048, 0.022, (side * 0.155, 0.01, 1.72), dark, "head", rot=(0, math.pi / 2, 0), vertices=18))
        parts.append(torus(f"ear_rim_{side}", 0.028, 0.005, (side * 0.168, 0.01, 1.72), accent, "head", rot=(0, math.pi / 2, 0)))

    # arms
    for side, suffix in ((-1, "L"), (1, "R")):
        ux = side * 0.265
        parts.append(sphere(f"shoulder_{suffix}", (0.072, 0.072, 0.072), (ux, 0, 1.435), suit, f"upper_arm_{suffix}", segments=16, rings=10))
        parts.append(capsule(f"upper_arm_{suffix}", (ux, 0, 1.43), (ux, 0, 1.15), 0.065, 0.055, suit, f"upper_arm_{suffix}"))
        parts.append(cube(f"pauldron_{suffix}", (0.13, 0.145, 0.07), (side * 0.278, 0, 1.458), armor, f"upper_arm_{suffix}", rot=(0, side * math.radians(10), 0), bevel_width=0.02))
        parts.append(sphere(f"elbow_{suffix}", (0.06, 0.06, 0.06), (ux, -0.004, 1.16), armor, f"forearm_{suffix}", segments=16, rings=10))
        parts.append(capsule(f"forearm_{suffix}", (ux, 0, 1.16), (ux, -0.015, 0.92), 0.054, 0.045, suit, f"forearm_{suffix}"))
        parts.append(cube(f"bracer_{suffix}", (0.09, 0.085, 0.16), (ux, -0.01, 1.03), armor, f"forearm_{suffix}", bevel_width=0.018))
        parts.append(cube(f"arm_light_{suffix}", (0.014, 0.012, 0.11), (side * (0.265 + 0.052), -0.01, 1.03), accent, f"forearm_{suffix}", bevel_width=0.003))
        parts.append(sphere(f"glove_{suffix}", (0.06, 0.07, 0.075), (ux, -0.02, 0.84), dark, f"hand_{suffix}", segments=16, rings=10))
        parts.append(cube(f"knuckle_{suffix}", (0.065, 0.03, 0.05), (ux, -0.062, 0.845), armor, f"hand_{suffix}", bevel_width=0.01))
        parts.append(torus(f"cuff_{suffix}", 0.052, 0.012, (ux, -0.01, 0.905), accent, f"forearm_{suffix}"))

    # legs
    for side, suffix in ((-1, "L"), (1, "R")):
        x = side * 0.118
        parts.append(capsule(f"thigh_{suffix}", (x, 0, 0.96), (x, 0, 0.53), 0.083, 0.068, pants, f"thigh_{suffix}"))
        parts.append(cube(f"thigh_plate_{suffix}", (0.115, 0.05, 0.20), (x, -0.074, 0.78), armor, f"thigh_{suffix}", bevel_width=0.018))
        parts.append(cube(f"thigh_light_{suffix}", (0.015, 0.012, 0.09), (side * (0.118 + 0.07), -0.03, 0.79), accent, f"thigh_{suffix}", bevel_width=0.003))
        parts.append(cube(f"cargo_{suffix}", (0.03, 0.075, 0.11), (side * 0.192, -0.005, 0.75), pants, f"thigh_{suffix}", bevel_width=0.008))
        parts.append(sphere(f"knee_{suffix}", (0.082, 0.082, 0.082), (x, -0.012, 0.55), armor, f"shin_{suffix}", segments=16, rings=10))
        parts.append(cube(f"knee_plate_{suffix}", (0.085, 0.035, 0.08), (x, -0.062, 0.55), armor, f"shin_{suffix}", bevel_width=0.012))
        parts.append(capsule(f"shin_{suffix}", (x, 0, 0.565), (x, 0, 0.15), 0.066, 0.048, pants, f"shin_{suffix}"))
        parts.append(cube(f"shin_guard_{suffix}", (0.09, 0.04, 0.24), (x, -0.055, 0.35), armor, f"shin_{suffix}", bevel_width=0.014))
        parts.append(cube(f"shin_light_{suffix}", (0.014, 0.012, 0.10), (side * (0.118 + 0.052), -0.03, 0.34), accent, f"shin_{suffix}", bevel_width=0.003))
        parts.append(cube(f"ankle_cuff_{suffix}", (0.105, 0.13, 0.08), (x, -0.01, 0.17), armor, f"shin_{suffix}", bevel_width=0.016))
        parts.append(cube(f"boot_{suffix}", (0.135, 0.29, 0.11), (x, -0.06, 0.08), pants, f"foot_{suffix}", bevel_width=0.024))
        parts.append(cube(f"sole_{suffix}", (0.145, 0.31, 0.03), (x, -0.065, 0.022), dark, f"foot_{suffix}", bevel_width=0.008))
        parts.append(cube(f"toecap_{suffix}", (0.12, 0.09, 0.065), (x, -0.19, 0.07), armor, f"foot_{suffix}", bevel_width=0.014))
        parts.append(cube(f"boot_light_{suffix}", (0.013, 0.08, 0.016), (side * (0.118 + 0.07), -0.10, 0.075), accent, f"foot_{suffix}", bevel_width=0.003))
        if side == 1:
            parts.append(cube("holster", (0.06, 0.075, 0.16), (0.19, -0.02, 0.77), dark, "thigh_R", bevel_width=0.012))
            parts.append(cube("holster_grip", (0.04, 0.04, 0.06), (0.19, -0.055, 0.86), metal, "thigh_R", rot=(math.radians(-18), 0, 0), bevel_width=0.008))
            parts.append(cube("holster_light", (0.012, 0.012, 0.06), (0.19, -0.062, 0.75), accent, "thigh_R", bevel_width=0.002))

    # rifle, held in the right hand, barrel forward (-Y)
    gx, gy, gz = 0.33, -0.18, 0.9
    parts.append(cube("rifle_body", (0.07, 0.34, 0.115), (gx, gy, gz), dark, "hand_R", bevel_width=0.012))
    parts.append(cube("rifle_rail", (0.05, 0.28, 0.022), (gx, gy - 0.01, gz + 0.07), metal, "hand_R", bevel_width=0.004))
    parts.append(cylinder("rifle_barrel", 0.022, 0.3, (gx, gy - 0.31, gz + 0.015), metal, "hand_R", rot=(math.pi / 2, 0, 0), vertices=12))
    parts.append(cylinder("rifle_brake", 0.035, 0.06, (gx, gy - 0.48, gz + 0.015), metal, "hand_R", rot=(math.pi / 2, 0, 0), vertices=12))
    parts.append(cube("rifle_stock", (0.055, 0.16, 0.09), (gx, gy + 0.23, gz - 0.005), dark, "hand_R", bevel_width=0.01))
    parts.append(cube("rifle_grip", (0.035, 0.05, 0.12), (gx, gy + 0.04, gz - 0.1), dark, "hand_R", rot=(math.radians(-18), 0, 0), bevel_width=0.008))
    parts.append(cube("rifle_mag", (0.035, 0.07, 0.13), (gx, gy - 0.11, gz - 0.1), armor, "hand_R", rot=(math.radians(8), 0, 0), bevel_width=0.008))
    parts.append(cube("rifle_light", (0.012, 0.17, 0.014), (gx + 0.04, gy - 0.06, gz + 0.02), accent, "hand_R", bevel_width=0.003))
    parts.append(cube("rifle_sight", (0.035, 0.06, 0.045), (gx, gy - 0.02, gz + 0.095), metal, "hand_R", bevel_width=0.006))
    parts.append(cube("rifle_sight_dot", (0.015, 0.015, 0.015), (gx, gy - 0.055, gz + 0.105), accent, "hand_R", bevel_width=0.003))
    # tiny muzzle marker keeps the muzzle bone in the exported skin
    parts.append(cube("muzzle_marker", (0.012, 0.02, 0.012), (gx, gy - 0.52, gz + 0.015), dark, "muzzle", bevel_width=0.0))

    # join everything into one skinned mesh
    bpy.ops.object.select_all(action="DESELECT")
    active(parts[0])
    for part in parts[1:]:
        part.select_set(True)
    bpy.ops.object.join()
    body = bpy.context.object
    body.name = "NF_Operator"
    body.data.name = "NF_OperatorMesh"
    body.parent = rig
    mod = body.modifiers.new("Armature", "ARMATURE")
    mod.object = rig
    return body


# ---------------------------------------------------------------------------
# animation helpers
# ---------------------------------------------------------------------------
def clear_pose(rig):
    for pb in rig.pose.bones:
        pb.rotation_mode = "XYZ"
        pb.rotation_euler = (0, 0, 0)
        pb.location = (0, 0, 0)
        pb.scale = (1, 1, 1)


def set_pose(rig, values):
    """values: {bone: (x,y,z)} plus optional 'hips_lift'."""
    clear_pose(rig)
    for name, rot in values.items():
        if name == "hips_lift":
            rig.pose.bones["hips"].location = (0, rot, 0)
            continue
        rig.pose.bones[name].rotation_euler = Euler(rot, "XYZ")


def key_pose(rig, frame, values):
    set_pose(rig, values)
    for name, rot in values.items():
        if name == "hips_lift":
            rig.pose.bones["hips"].keyframe_insert("location", frame=frame)
        else:
            rig.pose.bones[name].keyframe_insert("rotation_euler", frame=frame)


def gun_hand(upper, forearm, pitch=0.02):
    """Right-hand wrist compensation so the rifle stays level."""
    return -upper - forearm + pitch


def action_fcurves(action):
    """Blender 4.4+ stores curves inside slotted-action channel bags."""
    try:
        return list(action.fcurves)
    except AttributeError:
        curves = []
        for layer in action.layers:
            for strip in layer.strips:
                for bag in strip.channelbags:
                    curves.extend(bag.fcurves)
        return curves


def catmull(p0, p1, p2, p3, t):
    return 0.5 * (
        (2 * p1)
        + (-p0 + p2) * t
        + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t
        + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t
    )


def build_action(rig, name, intervals, pose_fn):
    rig.animation_data_create()
    action = bpy.data.actions.new(name)
    action.use_fake_user = True
    rig.animation_data.action = action
    for frame in range(intervals + 1):
        values = pose_fn(frame / intervals)
        key_pose(rig, frame, values)
    for fcurve in action_fcurves(action):
        for key in fcurve.keyframe_points:
            key.interpolation = "LINEAR"
    # Push a copy into an NLA track so the glTF exporter reliably sees it.
    track = rig.animation_data.nla_tracks.new()
    track.name = name
    strip = track.strips.new(name, 0, action)
    strip.name = name
    if hasattr(strip, "action_slot") and action.slots:
        strip.action_slot = action.slots[0]
    track.mute = True
    rig.animation_data.action = None
    return action


# ---------------------------------------------------------------------------
# animation poses
# ---------------------------------------------------------------------------
def sprint_pose(t):
    # contact / compression / drive / flight, mirrored for the second step
    keys = [
        (0.0, {
            "thigh_L": (-0.30, 0, 0.03), "shin_L": (0.16, 0, 0),
            "foot_L": (-0.06, 0, 0),
            "thigh_R": (0.52, 0, -0.03), "shin_R": (0.82, 0, 0),
            "foot_R": (0.16, 0, 0),
            "hips": (0.03, -0.08, 0.02), "spine": (0.10, -0.06, 0),
            "chest": (0.16, -0.14, -0.02), "head": (-0.20, 0.10, 0),
            "upper_arm_L": (0.78, 0, -0.16), "forearm_L": (-0.95, 0, 0.02),
            "hand_L": (0, 0, 0),
            "upper_arm_R": (-0.36, 0, 0.12), "forearm_R": (-0.72, 0, 0.06),
            "hand_R": (gun_hand(-0.36, -0.72), 0, 0),
            "hips_lift": -0.025,
        }),
        (0.125, {
            "thigh_L": (-0.04, 0, 0.03), "shin_L": (0.22, 0, 0),
            "foot_L": (0.02, 0, 0),
            "thigh_R": (0.26, 0, -0.03), "shin_R": (1.25, 0, 0),
            "foot_R": (0.12, 0, 0),
            "hips": (0.04, -0.02, 0.015), "spine": (0.11, -0.02, 0),
            "chest": (0.17, -0.04, -0.015), "head": (-0.21, 0.03, 0),
            "upper_arm_L": (0.42, 0, -0.17), "forearm_L": (-1.12, 0, 0.02),
            "hand_L": (0, 0, 0),
            "upper_arm_R": (-0.37, 0, 0.12), "forearm_R": (-0.7, 0, 0.06),
            "hand_R": (gun_hand(-0.37, -0.7), 0, 0),
            "hips_lift": -0.01,
        }),
        (0.25, {
            "thigh_L": (0.28, 0, 0.03), "shin_L": (0.24, 0, 0),
            "foot_L": (0.18, 0, 0),
            "thigh_R": (-0.36, 0, -0.03), "shin_R": (1.18, 0, 0),
            "foot_R": (0.04, 0, 0),
            "hips": (0.045, 0.06, 0.01), "spine": (0.11, 0.05, 0),
            "chest": (0.175, 0.12, -0.01), "head": (-0.21, -0.08, 0),
            "upper_arm_L": (0.18, 0, -0.18), "forearm_L": (-1.2, 0, 0.02),
            "hand_L": (0, 0, 0),
            "upper_arm_R": (-0.35, 0, 0.12), "forearm_R": (-0.74, 0, 0.06),
            "hand_R": (gun_hand(-0.35, -0.74), 0, 0),
            "hips_lift": 0.028,
        }),
        (0.375, {
            "thigh_L": (0.55, 0, 0.03), "shin_L": (0.7, 0, 0),
            "foot_L": (0.22, 0, 0),
            "thigh_R": (-0.44, 0, -0.03), "shin_R": (0.34, 0, 0),
            "foot_R": (-0.04, 0, 0),
            "hips": (0.035, 0.1, 0.015), "spine": (0.1, 0.08, 0),
            "chest": (0.16, 0.15, -0.015), "head": (-0.2, -0.1, 0),
            "upper_arm_L": (-0.28, 0, -0.18), "forearm_L": (-1.28, 0, 0.02),
            "hand_L": (0, 0, 0),
            "upper_arm_R": (-0.34, 0, 0.12), "forearm_R": (-0.76, 0, 0.06),
            "hand_R": (gun_hand(-0.34, -0.76), 0, 0),
            "hips_lift": 0.052,
        }),
        (0.5, {
            "thigh_L": (0.52, 0, 0.03), "shin_L": (0.82, 0, 0),
            "foot_L": (0.16, 0, 0),
            "thigh_R": (-0.30, 0, -0.03), "shin_R": (0.16, 0, 0),
            "foot_R": (-0.06, 0, 0),
            "hips": (0.03, 0.08, 0.02), "spine": (0.10, 0.06, 0),
            "chest": (0.16, 0.14, -0.02), "head": (-0.2, -0.1, 0),
            "upper_arm_L": (-0.78, 0, -0.16), "forearm_L": (-0.95, 0, 0.02),
            "hand_L": (0, 0, 0),
            "upper_arm_R": (-0.36, 0, 0.12), "forearm_R": (-0.72, 0, 0.06),
            "hand_R": (gun_hand(-0.36, -0.72), 0, 0),
            "hips_lift": -0.025,
        }),
        (0.625, {
            "thigh_L": (0.26, 0, 0.03), "shin_L": (1.25, 0, 0),
            "foot_L": (0.12, 0, 0),
            "thigh_R": (-0.04, 0, -0.03), "shin_R": (0.22, 0, 0),
            "foot_R": (0.02, 0, 0),
            "hips": (0.04, 0.02, 0.015), "spine": (0.11, 0.02, 0),
            "chest": (0.17, 0.04, -0.015), "head": (-0.21, -0.03, 0),
            "upper_arm_L": (-0.42, 0, -0.17), "forearm_L": (-1.12, 0, 0.02),
            "hand_L": (0, 0, 0),
            "upper_arm_R": (-0.37, 0, 0.12), "forearm_R": (-0.7, 0, 0.06),
            "hand_R": (gun_hand(-0.37, -0.7), 0, 0),
            "hips_lift": -0.01,
        }),
        (0.75, {
            "thigh_L": (-0.36, 0, 0.03), "shin_L": (1.18, 0, 0),
            "foot_L": (0.04, 0, 0),
            "thigh_R": (0.28, 0, -0.03), "shin_R": (0.24, 0, 0),
            "foot_R": (0.18, 0, 0),
            "hips": (0.045, -0.06, 0.01), "spine": (0.11, -0.05, 0),
            "chest": (0.175, -0.12, -0.01), "head": (-0.21, 0.08, 0),
            "upper_arm_L": (-0.18, 0, -0.18), "forearm_L": (-1.2, 0, 0.02),
            "hand_L": (0, 0, 0),
            "upper_arm_R": (-0.35, 0, 0.12), "forearm_R": (-0.74, 0, 0.06),
            "hand_R": (gun_hand(-0.35, -0.74), 0, 0),
            "hips_lift": 0.028,
        }),
        (0.875, {
            "thigh_L": (-0.44, 0, 0.03), "shin_L": (0.34, 0, 0),
            "foot_L": (-0.04, 0, 0),
            "thigh_R": (0.55, 0, -0.03), "shin_R": (0.7, 0, 0),
            "foot_R": (0.22, 0, 0),
            "hips": (0.035, -0.1, 0.015), "spine": (0.1, -0.08, 0),
            "chest": (0.16, -0.15, -0.015), "head": (-0.2, 0.1, 0),
            "upper_arm_L": (0.28, 0, -0.18), "forearm_L": (-1.28, 0, 0.02),
            "hand_L": (0, 0, 0),
            "upper_arm_R": (-0.34, 0, 0.12), "forearm_R": (-0.76, 0, 0.06),
            "hand_R": (gun_hand(-0.34, -0.76), 0, 0),
            "hips_lift": 0.052,
        }),
    ]
    return sample_keys(t, keys)


def sample_keys(t, keys):
    """Periodic Catmull-Rom between the supplied pose dictionaries."""
    n = len(keys)
    t = t % 1.0
    idx = 0
    while idx < n - 1 and not (keys[idx][0] <= t <= keys[idx + 1][0]):
        idx += 1
    t0, p0 = keys[idx]
    t1, p1 = keys[(idx + 1) % n]
    span = (t1 - t0) if t1 > t0 else 1.0
    u = (t - t0) / span
    prev = keys[(idx - 1) % n][1]
    nxt = keys[(idx + 2) % n][1]
    names = set(p0) | set(p1) | set(prev) | set(nxt)
    out = {}
    for name in names:
        v0 = prev.get(name, (0, 0, 0))
        v1 = p0.get(name, (0, 0, 0))
        v2 = p1.get(name, (0, 0, 0))
        v3 = nxt.get(name, (0, 0, 0))
        if name == "hips_lift":
            out[name] = catmull(v0, v1, v2, v3, u)
        else:
            out[name] = tuple(catmull(v0[i], v1[i], v2[i], v3[i], u) for i in range(3))
    return out


def walk_pose(t):
    keys = [
        (0.0, {
            "thigh_L": (-0.34, 0, 0.02), "shin_L": (0.12, 0, 0), "foot_L": (-0.04, 0, 0),
            "thigh_R": (0.3, 0, -0.02), "shin_R": (0.34, 0, 0), "foot_R": (0.08, 0, 0),
            "hips": (0.02, -0.06, 0.015), "spine": (0.05, -0.04, 0), "chest": (0.07, -0.08, -0.01),
            "head": (-0.08, 0.05, 0),
            "upper_arm_L": (0.42, 0, -0.12), "forearm_L": (-0.45, 0, 0.02),
            "upper_arm_R": (-0.28, 0, 0.1), "forearm_R": (-0.62, 0, 0.05),
            "hand_R": (gun_hand(-0.28, -0.62), 0, 0),
            "hips_lift": -0.012,
        }),
        (0.25, {
            "thigh_L": (-0.05, 0, 0.02), "shin_L": (0.16, 0, 0), "foot_L": (0.02, 0, 0),
            "thigh_R": (0.08, 0, -0.02), "shin_R": (0.78, 0, 0), "foot_R": (0.1, 0, 0),
            "hips": (0.025, 0, 0.008), "spine": (0.055, 0, 0), "chest": (0.075, 0, -0.005),
            "head": (-0.085, 0, 0),
            "upper_arm_L": (0.22, 0, -0.13), "forearm_L": (-0.6, 0, 0.02),
            "upper_arm_R": (-0.3, 0, 0.1), "forearm_R": (-0.6, 0, 0.05),
            "hand_R": (gun_hand(-0.3, -0.6), 0, 0),
            "hips_lift": 0.012,
        }),
        (0.5, {
            "thigh_L": (0.3, 0, 0.02), "shin_L": (0.34, 0, 0), "foot_L": (0.08, 0, 0),
            "thigh_R": (-0.34, 0, -0.02), "shin_R": (0.12, 0, 0), "foot_R": (-0.04, 0, 0),
            "hips": (0.02, 0.06, 0.015), "spine": (0.05, 0.04, 0), "chest": (0.07, 0.08, -0.01),
            "head": (-0.08, -0.05, 0),
            "upper_arm_L": (-0.42, 0, -0.12), "forearm_L": (-0.45, 0, 0.02),
            "upper_arm_R": (-0.28, 0, 0.1), "forearm_R": (-0.62, 0, 0.05),
            "hand_R": (gun_hand(-0.28, -0.62), 0, 0),
            "hips_lift": -0.012,
        }),
        (0.75, {
            "thigh_L": (0.08, 0, 0.02), "shin_L": (0.78, 0, 0), "foot_L": (0.1, 0, 0),
            "thigh_R": (-0.05, 0, -0.02), "shin_R": (0.16, 0, 0), "foot_R": (0.02, 0, 0),
            "hips": (0.025, 0, 0.008), "spine": (0.055, 0, 0), "chest": (0.075, 0, -0.005),
            "head": (-0.085, 0, 0),
            "upper_arm_L": (-0.22, 0, -0.13), "forearm_L": (-0.6, 0, 0.02),
            "upper_arm_R": (-0.3, 0, 0.1), "forearm_R": (-0.6, 0, 0.05),
            "hand_R": (gun_hand(-0.3, -0.6), 0, 0),
            "hips_lift": 0.012,
        }),
    ]
    return sample_keys(t, keys)


def aim_base(t, walking=False):
    if walking:
        base = walk_pose(t)
        # replace upper body with the aim pose
        base.update(aim_upper(t))
        # damp the stride a little while aiming
        for key in ("thigh_L", "thigh_R"):
            x, y, z = base[key]
            base[key] = (x * 0.72, y, z)
        return base
    values = {
        "hips": (0.02, 0, 0), "spine": (0.05, 0, 0), "chest": (0.08, 0, 0),
        "head": (-0.08, 0, 0),
        "thigh_L": (-0.08, 0, 0.04), "shin_L": (0.16, 0, 0), "foot_L": (-0.02, 0, 0),
        "thigh_R": (0.06, 0, -0.04), "shin_R": (0.12, 0, 0), "foot_R": (0.02, 0, 0),
        "hips_lift": 0.0,
    }
    values.update(aim_upper(t))
    return values


def aim_upper(t):
    sway = math.sin(t * math.tau) * 0.012
    # Rifle shouldered at eye level: the upper arm reaches forward and the
    # elbow folds up so the hand sits near the visor, then the wrist
    # counter-rotates to keep the muzzle level.
    upper = -1.45 + sway
    fore = -0.62
    return {
        "chest": (0.06, 0.05, 0),
        "head": (-0.06, -0.04, 0),
        "upper_arm_R": (upper, 0, 0.12), "forearm_R": (fore, 0, 0.02),
        "hand_R": (gun_hand(upper, fore, 0.0), 0, 0),
        "upper_arm_L": (-1.05, 0.3, -0.5), "forearm_L": (-0.85, 0, 0.35),
        "hand_L": (0, 0, 0),
    }


def idle_pose(t):
    breathe = math.sin(t * math.tau * 2) * 0.012
    sway = math.sin(t * math.tau) * 0.02
    values = {
        "hips": (0.015, sway * 0.3, 0), "spine": (0.02 + breathe, 0, 0),
        "chest": (0.03 + breathe, sway * 0.2, 0), "head": (-0.03 - breathe, -sway, sway * 0.3),
        "thigh_L": (0, 0, 0.02), "shin_L": (0.04, 0, 0), "foot_L": (0, 0, 0),
        "thigh_R": (0, 0, -0.02), "shin_R": (0.04, 0, 0), "foot_R": (0, 0, 0),
        "upper_arm_L": (0.02 + sway * 0.4, 0, -0.08), "forearm_L": (-0.22, 0, 0.02),
        "upper_arm_R": (-0.22, 0, 0.08), "forearm_R": (-0.56, 0, 0.04),
        "hand_R": (gun_hand(-0.22, -0.56, 0.03), 0, 0),
        "hips_lift": breathe * 0.5,
    }
    return values


def air_pose(t):
    sway = math.sin(t * math.tau) * 0.02
    return {
        "hips": (0.04, 0, 0), "spine": (0.04, 0, 0), "chest": (0.05, 0, 0),
        "head": (-0.06, sway, 0),
        "thigh_L": (-0.38, 0, 0.05), "shin_L": (0.72, 0, 0), "foot_L": (0.08, 0, 0),
        "thigh_R": (-0.16, 0, -0.05), "shin_R": (0.52, 0, 0), "foot_R": (0.04, 0, 0),
        "upper_arm_L": (-0.28, 0, -0.28), "forearm_L": (-0.75, 0, 0.04),
        "upper_arm_R": (-0.34, 0, 0.1), "forearm_R": (-0.82, 0, 0.04),
        "hand_R": (gun_hand(-0.34, -0.82, 0.03), 0, 0),
        "hips_lift": 0.02,
    }


# ---------------------------------------------------------------------------
# export
# ---------------------------------------------------------------------------
def export_glb(rig, body):
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    bpy.ops.object.select_all(action="DESELECT")
    rig.select_set(True)
    body.select_set(True)
    bpy.context.view_layer.objects.active = rig
    bpy.ops.export_scene.gltf(
        filepath=OUT,
        export_format="GLB",
        use_selection=True,
        export_yup=True,
        export_apply=True,
        export_animations=True,
        export_animation_mode="ACTIONS",
        export_anim_single_armature=True,
        export_bake_animation=True,
        export_force_sampling=True,
        export_optimize_animation_size=True,
        export_def_bones=False,
        export_skins=True,
        export_materials="EXPORT",
        export_cameras=False,
        export_lights=False,
    )
    print("EXPORTED", OUT, os.path.getsize(OUT))


# ---------------------------------------------------------------------------
# preview
# ---------------------------------------------------------------------------
def setup_preview():
    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = 720
    scene.render.resolution_y = 720
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = False
    scene.render.image_settings.file_format = "PNG"
    scene.render.fps = FPS
    scene.eevee.taa_render_samples = 24

    world = scene.world or bpy.data.worlds.new("World")
    scene.world = world
    world.use_nodes = True
    bg = world.node_tree.nodes.get("Background")
    bg.inputs[0].default_value = (0.008, 0.012, 0.025, 1)
    bg.inputs[1].default_value = 1.0

    # ground
    bpy.ops.mesh.primitive_plane_add(size=20, location=(0, 0, 0))
    ground = bpy.context.object
    ground.name = "PreviewGround"
    ground_mat = material("NF_PreviewGround", "#070a12", roughness=0.55, metallic=0.35)
    ground.data.materials.append(ground_mat)

    # camera, three-quarter front view (front = -Y)
    cam_data = bpy.data.cameras.new("PreviewCam")
    cam = bpy.data.objects.new("PreviewCam", cam_data)
    bpy.context.collection.objects.link(cam)
    cam.location = (3.2, -3.7, 2.1)
    cam.rotation_euler = (math.radians(76), 0, math.radians(41))
    cam_data.lens = 58
    scene.camera = cam

    def area(name, loc, rot, energy, color, size):
        data = bpy.data.lights.new(name, "AREA")
        data.energy = energy
        data.color = color
        data.shape = "DISK"
        data.size = size
        obj = bpy.data.objects.new(name, data)
        bpy.context.collection.objects.link(obj)
        obj.location = loc
        obj.rotation_euler = rot
        return obj

    area("Key", (2.8, -3.0, 3.4), (math.radians(38), 0, math.radians(40)), 520, (0.72, 0.92, 1.0), 3.0)
    area("Fill", (-3.2, -2.0, 2.2), (math.radians(65), 0, math.radians(-55)), 220, (0.55, 0.35, 0.9), 3.0)
    area("Rim", (0.4, 3.4, 3.0), (math.radians(120), 0, 0), 480, (0.2, 0.9, 1.0), 2.5)

    return cam


def render_frames(action_name, frames):
    scene = bpy.context.scene
    rig = bpy.data.objects["NF_OperatorRig"]
    action = bpy.data.actions[action_name]
    rig.animation_data.action = action
    if hasattr(rig.animation_data, "action_slot") and action.slots:
        rig.animation_data.action_slot = action.slots[0]
    os.makedirs(PREVIEW_DIR, exist_ok=True)
    paths = []
    for frame in frames:
        scene.frame_set(frame)
        path = os.path.join(PREVIEW_DIR, f"{action_name.lower()}_{frame:02d}.png")
        scene.render.filepath = path
        bpy.ops.render.render(write_still=True)
        paths.append(path)
    return paths


def contact_sheet(paths, out_path):
    if not paths:
        return
    imgs = [bpy.data.images.load(p) for p in paths]
    w, h = imgs[0].size
    cols = 2
    rows = (len(paths) + cols - 1) // cols
    out = bpy.data.images.new("contact", width=w * cols, height=h * rows, alpha=False)
    out_pixels = [0.0] * (w * cols * h * rows * 4)
    for idx, img in enumerate(imgs):
        px = list(img.pixels)
        cx = idx % cols
        cy = rows - 1 - idx // cols
        for y in range(h):
            src = y * w * 4
            dst = ((cy * h + y) * w * cols + cx * w) * 4
            out_pixels[dst:dst + w * 4] = px[src:src + w * 4]
    out.pixels = out_pixels
    out.filepath_raw = out_path
    out.file_format = "PNG"
    out.save()


def main():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    scene = bpy.context.scene
    scene.render.fps = FPS
    rig = build_rig()
    body = build_operator(rig)

    build_action(rig, "Idle", 60, idle_pose)
    build_action(rig, "Walk", 18, walk_pose)
    build_action(rig, "Sprint", 12, sprint_pose)
    build_action(rig, "Aim", 60, lambda t: aim_base(t, False))
    build_action(rig, "AimWalk", 18, lambda t: aim_base(t, True))
    build_action(rig, "Air", 30, air_pose)

    export_glb(rig, body)
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT, "assets", "operator.blend"))

    if RENDER:
        setup_preview()
        paths = []
        for action_name, frames in (
            ("Sprint", [0, 3, 6, 9]),
            ("Walk", [0, 4, 9, 13]),
            ("Aim", [0]),
            ("Idle", [0]),
        ):
            paths.extend(render_frames(action_name, frames))
        contact_sheet(paths, os.path.join(PREVIEW_DIR, "operator_contact.png"))
        print("PREVIEWED", os.path.join(PREVIEW_DIR, "operator_contact.png"))


main()
