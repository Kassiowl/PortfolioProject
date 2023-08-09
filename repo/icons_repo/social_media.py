import json


def github():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    github = json_loads['social_media']['github']
    
    json_open.close()
    return github

def linkedin():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    linkedin = json_loads['social_media']['linkedin']
    
    json_open.close()
    return linkedin

def medium():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    medium = json_loads['social_media']['medium']
    
    json_open.close()
    return medium