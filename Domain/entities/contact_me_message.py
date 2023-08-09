from dataclasses import dataclass


@dataclass
class ContactMeMessage:
    sender_email_address: str
    receiver_email_address: str
    subject: str
    message: str
    