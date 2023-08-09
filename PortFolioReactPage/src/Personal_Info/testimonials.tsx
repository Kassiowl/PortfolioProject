import {  FormEvent, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { extractParagraphs } from "./util/extract_paragraph";
import { getTestimonials } from "../repositories/get_info/get_testimonials";
import { sendEmail } from "../repositories/request/send_email";



function useSetTestimonials(){

    const [testimonials, setTestimonials] = useState<Array<any>>([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() =>{
      const fetchTestimonials = async() =>{
        try{
      
          const testimonials = await getTestimonials()
          console.log("testimonials")
          console.log(testimonials)
          setTestimonials(testimonials)
        }
        catch{
          setTestimonials(["something went wrong"])
        }
        finally
        {
          setIsLoading(false)
        }
  
      }
      fetchTestimonials()
    }, [])

    return { "data" : testimonials, "loading": isLoading }
}


function Testimonials(this: any) {


  const onFieldChange = (event: any) => {
    let value = event.target.value;
    setState({ ...state, [event.target.id]: value });
  };

  
  const testimonialSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = 'testimonial';
    const message = `Name : ${state['name']}, where: ${state['where']}, role: ${state['role']} testimonial_text: ${state['testimonial_text']} linkedin_profile: ${state['linkedin_profile']}`
    if(sendEmail(message, subject))
    {
      setSuccessMessage("Testimonial sent")
      return
    }
    setFailedMessage("Something went wrong, the testimonial was not sent, try again latter")
};

  const testimonial_custom_hook = useSetTestimonials()

  const testimonials = testimonial_custom_hook.data
  const loading = testimonial_custom_hook.loading

  const [successMessage, setSuccessMessage] = useState<string>()
  const [failedMessage, setFailedMessage] = useState<string>()

  

  const [state, setState] = useState({
    name: "",
    where: "",
    role: "",
    testimonial_text: "",
    linkedin_profile: "",
  });
 
  return(
    <>
       <Container fluid="xs">
        {loading ? (
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        ) : 
        (
        <Row>
          {
            testimonials.map((testimonial) => (
            <Col sm={12} md={8} lg={6} xxl={3}>
              <div className="mb-4 mt-4 ms-2">
                <h5>{testimonial.persons_name}</h5>
                <Row>
                  <Col sm={12} md={2}>
                  <a href={testimonial.url}>
                    <img src={testimonial.icon} width={50} height={50}></img>
                  </a>
                  </Col>
                  <Col sm={12} md={4}>
                    <h6 className="text-center mt-3">{testimonial.person_role}</h6>
                  </Col>
                </Row>
                <h6 className="mt-4">{testimonial.where}</h6>
                {(extractParagraphs(testimonial)).map(function (p: any) {
                    return (
                      <p>{p}</p>
                    );
                  })}
              </div>
              </Col>
            ))
          }
        </Row>
           )}
      </Container>

      <Container className="mt-4">
        <Row>
          <Col sm={12} className="text-center">
            <h3>Have you worked with me? Give me your testimonial</h3>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col sm={8} className="content-center ">
            <Form onSubmit={testimonialSubmit}>
            <Form.Group className="m-4" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Kassio Wallace de Oliveira" onChange={onFieldChange}/>
            </Form.Group>
            <Form.Group className="m-4" controlId="where">
              <Form.Label>Where we worked together</Form.Label>
              <Form.Control type="text" onChange={onFieldChange} />
            </Form.Group>
            <Form.Group className="m-4" controlId="role">
              <Form.Label>Your Role</Form.Label>
              <Form.Control type="text" placeholder="software developer" onChange={onFieldChange}  />
            </Form.Group>
            <Form.Group className="m-4" controlId="testimonial_text">
              <Form.Label>Testimonial</Form.Label>
              <Form.Control as="textarea" className="text-area-custom-css" onChange={onFieldChange} />
            </Form.Group>
            <Form.Group className="m-4" controlId="linkedin_profile">
              <Form.Label>Linkedin profile</Form.Label>
              <Form.Control type="text" placeholder="https://www.linkedin.com/in/kassiowallace/" onChange={onFieldChange}/>
            </Form.Group>
            <button className="btn btn-lg ms-4" type="submit" >Send</button>
          </Form>
          <div className="text-center">
            <p className="text-success">{successMessage}</p>
            <p className="text-danger">{failedMessage}</p>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
  
export default Testimonials;

function handleChange(e: any, arg1: any) {
  throw new Error("Function not implemented.");
}
  