
from abc import ABC, abstractmethod


class EmailRepoDef(ABC):

    @abstractmethod
    def send_email(self, email_message, email_subject) -> bool:
        pass