import axios from "axios";

export function sendEmail(message_arg: string, subject_arg: string){
    axios.post('http://127.0.0.1:8000/sendEmail', {
        message: message_arg,
        subject: subject_arg
      })
      .then(function (response) {
        if(response.status != 200)
        {
          return false
        }
      })
      .catch(function (error) {
        return false
      });

      return true
}

