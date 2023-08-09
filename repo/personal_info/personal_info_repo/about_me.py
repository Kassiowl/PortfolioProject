from Domain.entities.about_me import AboutMe
import json

def get_about_me():
    json_open = open("repo/personal_info/personal_info_repo/personal_info.json", "r")

    json_loads = json.loads(json_open.read())

    about_me = json_loads['about_me']

    paragraphs = about_me['paragraphs']
    
    json_open.close()

    about_me = AboutMe('About Me',paragraphs)
    return about_me
