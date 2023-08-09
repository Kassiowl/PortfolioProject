import json
from Domain.entities.experiences import Experience


def get_experiences():
  
    json_open = open("repo/personal_info/personal_info_repo/personal_info.json", "r")
    json_loads = json.loads(json_open.read())
    
    experiences = json_loads['experiences']

    experience_list = []
    for experience in experiences:
       experience_append = Experience(experience, experiences[experience]['paragraphs'],
                                       experiences[experience]['tecnologies']['front-end-tecnologies'], 
                                       experiences[experience]['tecnologies']['back-end-tecnologies'])
       experience_list.append(experience_append)
    json_open.close()
    return experience_list

   