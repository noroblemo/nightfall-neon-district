"""Debug renders for the operator asset: rest pose, front and side."""
import bpy
import math
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLEND = os.path.join(ROOT, "assets", "operator.blend")
OUT = os.path.join(ROOT, "previews")

bpy.ops.wm.open_mainfile(filepath=BLEND)
scene = bpy.context.scene
rig = bpy.data.objects["NF_OperatorRig"]
body = bpy.data.objects["NF_Operator"]

# Report per-group bounds for the arm groups.
groups = {g.index: g.name for g in body.vertex_groups}
bounds = {}
for v in body.data.vertices:
    for ge in v.groups:
        name = groups.get(ge.group)
        if name and ge.weight > 0.5:
            b = bounds.setdefault(name, [1e9, -1e9, 1e9, -1e9, 1e9, -1e9])
            b[0] = min(b[0], v.co.x); b[1] = max(b[1], v.co.x)
            b[2] = min(b[2], v.co.y); b[3] = max(b[3], v.co.y)
            b[4] = min(b[4], v.co.z); b[5] = max(b[5], v.co.z)
for name in ("upper_arm_L", "forearm_L", "hand_L", "upper_arm_R", "forearm_R", "hand_R"):
    if name in bounds:
        b = bounds[name]
        print("BOUNDS", name, [round(x, 3) for x in b])

# Rest pose, workbench material colours.
rig.data.pose_position = "REST"
scene.render.engine = "BLENDER_WORKBENCH"
scene.render.resolution_x = 560
scene.render.resolution_y = 760
scene.render.resolution_percentage = 100
scene.render.image_settings.file_format = "PNG"
scene.display.shading.light = "STUDIO"
scene.display.shading.color_type = "MATERIAL"
scene.display.shading.show_shadows = True
scene.display.shading.show_cavity = True
scene.display.shading.cavity_type = "BOTH"
scene.display.shading.show_specular_highlight = True

world = bpy.data.worlds.new("DebugWorld")
scene.world = world
world.color = (0.03, 0.04, 0.07)

cam_data = bpy.data.cameras.new("DebugCam")
cam_data.type = "ORTHO"
cam_data.ortho_scale = 2.35
cam = bpy.data.objects.new("DebugCam", cam_data)
scene.collection.objects.link(cam)
scene.camera = cam

views = {
    "rest_front": ((0.0, -4.0, 0.95), (math.radians(90), 0, 0)),
    "rest_side": ((4.0, 0.0, 0.95), (math.radians(90), 0, math.radians(90))),
    "rest_three_quarter": ((2.8, -3.2, 1.9), (math.radians(78), 0, math.radians(41))),
}

for name, (loc, rot) in views.items():
    cam.location = loc
    cam.rotation_euler = rot
    path = os.path.join(OUT, f"{name}.png")
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    print("RENDERED", path)
