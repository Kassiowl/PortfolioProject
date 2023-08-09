import { Col, Container, Row } from "react-bootstrap";
import "./css/portfolio.css"
import { useEffect, useState } from "react";
import { extractParagraphs } from "./util/extract_paragraph";
import { getPortfolio } from "../repositories/get_info/get_portfolio";

function useSetPortfolio() {

  const [portfolio, setPortfolio] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {

        const experiences = await getPortfolio()
        setPortfolio(experiences)
      }
      catch {
        setPortfolio(["something went wrong"])
      }
      finally {
        setIsLoading(false)
      }
    }
    fetchPortfolio()
  }, [])

  return { "data": portfolio, "loading": isLoading }
}


function Portfolio() {
  const portfolio_custom_hook = useSetPortfolio()
  const portfolio = portfolio_custom_hook.data
  const loading = portfolio_custom_hook.loading
  return (
    <Container fluid="xs mt-4">
      {loading ? (
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      ) : 
      (
        <Row>
          {
            portfolio.map((project) => (
              <Col sm={12} md={8} lg={6} xxl={4}>
                <div className="mb-4 project">
                  <h5>{project.name}</h5>
                  {(extractParagraphs(project)).map(function (p: any) {
                    return (
                      <div className="justify-content-end">
                        <div className="project-paragraph-div">
                          <p>{p}</p>
                        </div>
                      </div>
                    );
                  })}
                  <a href={project.url} target="_blank">
                    <img src={project.icon} width={500} height={500}></img>
                  </a>
                </div>
              </Col>
            ))
          }
        </Row>
      )}
    </Container>

  )
}

export default Portfolio;
