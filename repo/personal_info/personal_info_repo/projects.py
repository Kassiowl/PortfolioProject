import json
from Domain.entities.project import Project

def get_projects():
    json_open = open("repo/personal_info/personal_info_repo/personal_info.json", "r")
    json_loads = json.loads(json_open.read())
    
    projects = json_loads['projects']

    project_list = []
    for project in projects:
       project_append = Project(project, projects[project]['paragraphs'])
       project_list.append(project_append)
    json_open.close()
    return project_list