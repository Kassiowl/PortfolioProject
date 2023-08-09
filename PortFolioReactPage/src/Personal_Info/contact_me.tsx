import { Container, Form } from "react-bootstrap";
import "./css/contact_me.css"
import { FormEvent, useState } from "react";
import { sendEmail } from "../repositories/request/send_email";



function ContactMe() {

  
  const [failedMessage, setFailedMessage] = useState<string>()
  const [successMessage, setSuccessMessage] = useState<string>()
  const [state, setState] = useState({
    email_address: "",
    subject: "",
    message: "",
  });
 

  const onFieldChange = (event: any) => {
    let value = event.target.value;
    setState({ ...state, [event.target.id]: value });
  };

    
  const contactMeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `${state['subject']}`
    const message = `email address: ${state['email_address']} \n\n\n message\n${state['message']}`
    if(sendEmail(message, subject))
    {
      setSuccessMessage("Message sent")
      return
    }
    setFailedMessage("Something went wrong, the message was not sent, try again latter")
};


    return(
      <Container className="">
        <Form onSubmit={contactMeSubmit}>
          <Form.Group className="m-4" controlId="email_address">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="your@email.com" onChange={onFieldChange}/>
          </Form.Group>
          <Form.Group className="m-4" controlId="subject">
            <Form.Label>subject</Form.Label>
            <Form.Control type="text" onChange={onFieldChange}/>
          </Form.Group>
          <Form.Group className="m-4" controlId="message">
            <Form.Label>message</Form.Label>
            <Form.Control as="textarea" className="text-area-custom-css" rows={10} onChange={onFieldChange}/>
          </Form.Group>
          <button className="btn btn-lg ms-4" type="submit">Send</button>
        </Form>
        <div className="text-center">
            <p className="text-success">{successMessage}</p>
            <p className="text-danger">{failedMessage}</p>
          </div>
      </Container>
      );
}


export default ContactMe;
    