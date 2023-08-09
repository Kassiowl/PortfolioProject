from Domain.repo.email_def import EmailRepoDef


class SendEmailUseCase():
    def __init__(self,email_repo: EmailRepoDef):
        self.email_repo = email_repo
    def run(self, email_message: str, email_subject: str):
        return self.email_repo.send_email(email_message, email_subject)