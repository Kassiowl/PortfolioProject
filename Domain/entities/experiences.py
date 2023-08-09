

from dataclasses import dataclass


@dataclass
class Experience:
    title: str
    paragraph: list[str]
    front_end_tecnologies: list[str]
    back_end_tecnologies: list[str]
    