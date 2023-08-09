import json


def projects_images():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    projects = json_loads['projects']
    
    json_open.close()
    return projects