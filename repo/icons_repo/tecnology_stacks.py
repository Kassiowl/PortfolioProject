import json



def python():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    python = json_loads['tecnologies']['python']
    
    json_open.close()
    return python

def django():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    django = json_loads['tecnologies']['django']
    
    json_open.close()
    return django

def aws():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    aws = json_loads['tecnologies']['aws']
    
    json_open.close()
    return aws

def react():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    react = json_loads['tecnologies']['react']
    
    json_open.close()
    return react

def javascript():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    javascript = json_loads['tecnologies']['javascript']
    
    json_open.close()
    return javascript

def css():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    css = json_loads['tecnologies']['css']
    
    json_open.close()
    return css

def html():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    html = json_loads['tecnologies']['html']
    
    json_open.close()
    return html


def blazor():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    blazor = json_loads['tecnologies']['blazor']
    
    json_open.close()
    return blazor

def dot_net_core():
    json_open = open("repo/icons_repo/images.json", "r")

    json_loads = json.loads(json_open.read())

    dot_net_core = json_loads['tecnologies']['dotnetcore']
    
    json_open.close()
    return dot_net_core

