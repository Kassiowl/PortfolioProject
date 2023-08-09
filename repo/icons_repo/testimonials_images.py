import json


def testimonials_image():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    projects = json_loads['testimonials']
    
    json_open.close()
    return projects