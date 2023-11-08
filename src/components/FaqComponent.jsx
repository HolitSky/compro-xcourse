import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { faq } from "../data";

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col className="p-5">
            <h1 className="text-center fw-bold">Frequently Ask Question</h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion>
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
