import requests
from Domain.repo.email_def import EmailRepoDef
from dotenv import dotenv_values

class EmailRepo(EmailRepoDef):
    def send_email(self, email_message, email_subject) -> bool:
        config = dotenv_values(".env")
        try:    
            requests.post(
            config['MAIN_GUN_SERVER_URL'],
            auth=("api", config['API_PRIVATE_KEY']),
            data={"from": config['MAIN_GUN_SERVER'],
                "to": config['RECIEVER_EMAIL'],
                "subject": email_subject,
                "text": email_message})
            return True
        except:
            return False