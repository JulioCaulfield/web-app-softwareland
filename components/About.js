import React from "react";
import { Container, Row, Col } from "reactstrap";
const About = () => {
  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                Know about <span className="text-warning">Food Tech</span>
              </h3>
              <p className="text-muted">
                We want you to know about our technologies that you could
                implement on your restaurant!
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
              The future is the present and the present is the future.
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">
                  Our Mission
                </h6>
                <p className="text-muted font-weight-light">
                  Implement multiple technologies to bring solutions to your
                  problems
                </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">
                  Our Vision
                </h6>
                <p className="text-muted font-weight-light">
                  Revolutionize the food industry with technology in multiple
                  situations.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
