from dataclasses import dataclass

@dataclass
class Email:
    email_sender: str
    recieve_email: str
    subject: str
    message: str
    