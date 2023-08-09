

from fastapi import FastAPI, HTTPException
from Domain.useCases.send_email_use_case import SendEmailUseCase
from api.models.email_model import Email
from api.util.get_necessary_image import get_necessary_image_information, get_necessary_testimonial_information
from repo.email.email_repo import EmailRepo
from repo.icons_repo.projects import projects_images
from repo.icons_repo.social_media import github, linkedin, medium
from repo.icons_repo.tecnology_stacks import aws, blazor, css, django, dot_net_core, html, javascript, python, react
from repo.icons_repo.testimonials_images import testimonials_image

from repo.personal_info.kassio import Kassio
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from fastapi_cache.decorator import cache

from redis import asyncio as aioredis


origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@cache()
async def get_cache():
    return 1


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/icons")
def icons():
    github_info = github()
    medium_info = medium()
    linkedin_info = linkedin()

    python_info = python()
    aws_info = aws()
    javascript_info = javascript()
    css_info = css()
    html_info = html()
    django_info = django()
    react_info = react()

    dot_net_core_info = dot_net_core()
    blazor_info = blazor()


    return  {
                "social_media":
                {
                    "github": github_info,
                    "medium": medium_info,
                    "linkedin": linkedin_info

                },
                "tecnology_stacks":
                {
                    "python": python_info,
                    "django": django_info,
                    "aws": aws_info,
                    "javascript": javascript_info,
                    "html": html_info,
                    "css": css_info,
                    "react": react_info,
                    "blazor": blazor_info,
                    "dot_net_core": dot_net_core_info
                }
            }



@app.get("/kassio")
@cache(expire=3600)
def read_root():
    kassio = Kassio()
    project_image_list = projects_images()
    testimonial_image_list = testimonials_image()


    projects_with_images = get_necessary_image_information(kassio.projects, project_image_list)

    testimonials_with_images = get_necessary_testimonial_information(kassio.testimonials, testimonial_image_list)
    return {
                "about_me": kassio.about_me,
                "experiences": kassio.experiences,
                "testimonials": testimonials_with_images,
                "projects": projects_with_images
           }

@app.post("/sendEmail")
def send_email(email: Email):

    email_subject = email.subject
    email_message = email.message

  
    print(email_message)

    email_repo = EmailRepo()
    send_email_use_case = SendEmailUseCase(email_repo)
    send_email = send_email_use_case.run(email_message, email_subject)
    if(send_email is False):
        raise HTTPException(status_code=500, detail="Server error, email not sent")
    return {"Email Sent", send_email}

@app.on_event("startup")
async def startup():
    redis = aioredis.from_url("redis://localhost")
    FastAPICache.init(RedisBackend(redis), prefix="fastapi-cache")