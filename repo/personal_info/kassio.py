



from repo.personal_info.personal_info_repo.about_me import get_about_me
from repo.personal_info.personal_info_repo.experiences import get_experiences
from repo.personal_info.personal_info_repo.projects import get_projects
from repo.personal_info.personal_info_repo.testimonials import get_testimonials


class Kassio:
    about_me = get_about_me()
    experiences = get_experiences()
    projects = get_projects()
    testimonials = get_testimonials()
