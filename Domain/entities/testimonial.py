from dataclasses import dataclass
import datetime


@dataclass
class Testimonial:
    person_name: str
    person_role: str
    where: str
    date: datetime
    paragraph: list[str]

    