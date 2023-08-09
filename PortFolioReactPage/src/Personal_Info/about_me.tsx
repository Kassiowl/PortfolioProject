import "./css/about-me.css"
import Picture from "./picture/person.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { getAboutMe } from "../repositories/get_info/get_about_me";


function useSetParagraphs() {

  const [paragraphs, setparagraphs] = useState<Array<string>>([]);
  const [loading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchAboutMe = async () => {
      try {

        const about_me = await getAboutMe()
        setparagraphs(about_me)
      }
      catch {
        setparagraphs(["something went wrong"])
      }
      finally {
        setIsLoading(false)
      }

    }
    fetchAboutMe()
  }, [])

  return { "data": paragraphs, "isLoading": loading }
}

function AboutMe() {

  const paragraph_custom_hook = useSetParagraphs()
  const paragraphs = paragraph_custom_hook.data;
  const loading = paragraph_custom_hook.isLoading

  return (
    <div className="about-me">

      <Container fluid="xs">
        <Row>
          <Col sm={12} md={8} lg={6} xxl={5}>
            <div className="text mb-4">
              <h2>About me</h2>
                {loading ? (
                  <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                ) : (
                  paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))
                )}
            </div>
          </Col>
          <Col>
            <div className="person">
              <img src={Picture} alt="person" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutMe;
