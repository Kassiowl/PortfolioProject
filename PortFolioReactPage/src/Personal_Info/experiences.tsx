import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { extractParagraphs } from "./util/extract_paragraph";
import { getExperiences } from "../repositories/get_info/get_experiences";
import { extractTechImage } from "./util/tech_text_to_tech_img";


function useSetExperiences() {

  const [experiences, setExperiences] = useState<Array<any>>([]);
  useEffect(() => {
    const fetchExperiences = async () => {
      try {

        const experiences = await getExperiences()
        setExperiences(experiences)
      }
      catch {
        setExperiences(["something went wrong"])
      }
 

    }
    fetchExperiences()
  }, [])

  return experiences
}



function Experiences() {

  const experiences = useSetExperiences()
  const [loading, setIsLoading] = useState(false)

  const [backEndIcons, setBackEndIcons] = useState<string[]>(['']);
  const [frontEndIcons, setFrontEndIcons] = useState<string[]>(['']);


  useEffect(() => {
    let back_and_array: any = [];
    setIsLoading(true)
    experiences.map(function (experience: any) {
      experience.back_end_tecnologies.map(function (tech: any) {
        extractTechImage(tech).then(result => {
          back_and_array.push(result.icon)
          setBackEndIcons([...back_and_array]);
          setIsLoading(false)
        })
      })

      let front_end_array: any = []
      setIsLoading(true)
      experience.front_end_tecnologies.map(function (tech: any) {
        extractTechImage(tech).then(result => {
          front_end_array.push(result.icon)
          setFrontEndIcons([...front_end_array]);
          setIsLoading(false)
        })
      })


    })
  }, [experiences]);

  return (
    <>
      <Container>
        {loading ? (
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        ) : (
        <Row>
          {
            experiences.map((experience) => (
              <Col sm={12} md={8} lg={6} xxl={4} className="mb-4 mt-4">
                <h2>{experience['title']}</h2>
                <h3>Activities</h3>
                {(extractParagraphs(experience)).map(function (p: any) {
                  return (
                    <p>{p}</p>
                  );
                })}
                <Container>
                  <Row>
                    <h4 className="text-center">Tecnologies Used</h4>
                    <Col sm={6} className="w-50">
                      <h5>Front-End</h5>
                      {frontEndIcons.map(function (tech_icon: string) {
                        return (
                          <img src={tech_icon} width={"40px"} height={"40px"} className="me-4"></img>
                        );
                      })}
                    </Col>
                    <Col sm={6} className="float-right w-50">
                      <h5>Back-End</h5>
                      {backEndIcons.map(function (tech_icon: string) {
                        return (
                          <img src={tech_icon} width={"40px"} height={"40px"} className="me-4"></img>
                        );
                      })}
                    </Col>
                  </Row>
                </Container>
              </Col>
            ))}
        </Row>
        )}
      </Container>
    </>
  )
}

export default Experiences;
