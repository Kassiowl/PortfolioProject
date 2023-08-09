import "../css/footer.css"

import { Link, BrowserRouter } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import { get_social_media_icons, get_tecnology_stack_icons } from "../../repositories/get_icons/get_icons"


function useSetSocialMediaIcons(){

    const [socialMedia, setSocialMedia] = useState<Array<any>>([]);

    useEffect(() =>{
      const fetchSocialMedia = async() =>{
        try{
      
          const social_media = await get_social_media_icons()
          setSocialMedia(social_media)
        }
        catch{
            setSocialMedia(["something went wrong"])
        }
  
      }
      fetchSocialMedia()
    }, [])

    return socialMedia
}

function useSetTechStackIcons(){

    const [techStack, setTechStack] = useState<Array<any>>([]);

    useEffect(() =>{
      const fetchTechStack = async() =>{
        try{
      
          const techStack = await get_tecnology_stack_icons()
          setTechStack(techStack)
        }
        catch{
            setTechStack(["something went wrong"])
        }
  
      }
      fetchTechStack()
    }, [])

    return techStack
}


function Footer() {
   
    const socialMedia = useSetSocialMediaIcons()
    const techStack = useSetTechStackIcons()

    return (

            <footer className="footer text-white">
                <Container fluid className="footer-info">
                    <Row className="stack-columns">
                        <Col lg={6} md={12} className="social-media d-flex flex-column align-items-start">
                                <BrowserRouter>
                                    <Container className="row-container" fluid>
                                        <h3>Social media</h3>
                                        <Row>
                                            <Col className="col-12">
                                            {
                                                socialMedia.map((social, i) => {
                                                if (i % 4 == 0) 
                                                {   
                                                    return (
                                                        <Col className="col-12">
                                                            <div className="image-div">
                                                                <Link to={social.url} target="_blank">
                                                                    <img src={social.icon} width={"70px"} height={"70px"}/>
                                                                </Link>
                                                            </div>                    
                                                        </Col>
                                                    );
                                                } 
                                                else 
                                                {
                                                    return(
                                                            <div className="image-div">
                                                                <Link to={social.url} target="_blank">
                                                                    <img src={social.icon} width={"70px"} height={"70px"}/>
                                                                </Link>
                                                            </div>
                                                    )
                                                }
                                            })}
                                            </Col>
                                        </Row>
                                    </Container>
                                </BrowserRouter>
                        </Col>
                        <Col lg={6} md={12}  className="tecnology-stacks d-flex flex-column align-items-end">
                            <h3 className="me-4">Tecnology Stacks</h3>
                            <div>
                                <BrowserRouter>
                                <Container className="row-container" fluid>
                                    <Row>
                                    <Col className="col-12">
                                            {
                                                techStack.map((tech, i) => {
                                                if (i % 4 == 0) 
                                                {
                                                    return (
                                                        <Col className="col-12">
                                                            <div className="image-div">
                                                                <Link to={tech.url} target="_blank">
                                                                    <img src={tech.icon} width={"70px"} height={"70px"}/>
                                                                </Link>
                                                            </div>                    
                                                        </Col>
                                                    );
                                                } 
                                                else 
                                                {
                                                    return(
                                                        <div className="image-div">
                                                            <Link to={tech.url} target="_blank">
                                                                <img src={tech.icon} width={"70px"} height={"70px"}/>
                                                            </Link>
                                                        </div>
                                                        );
                                                }
                                            })}
                                            </Col>
                                    </Row>
                                </Container>
                                </BrowserRouter>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
      );
  }
  
  export default Footer;