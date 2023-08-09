from pydantic import BaseModel


class Email(BaseModel):
    subject: str
    message: str