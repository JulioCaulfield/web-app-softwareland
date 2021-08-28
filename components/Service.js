import React from "react";
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    {
      title: "Route Management",
      desc: "We help you to take the best route possible for any delivery.",
    },
    {
      title: "Follow-up and success of deliveries",
      desc: "Your restaurant could see the current delivery in real time when this is on the way.",
    },
    {
      title: "Improvement in delivery planning",
      desc: "We orient you to take the best decisions for delivery to your customers",
    },
  ];

  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Delivery Solutions</span>
              </h3>
              <p className="text-muted">
                We know that delivery is a fundamental but also a complicated
                aspect to handle, so we can guide you to have the best delivery
                system in your restaurant.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <div className="mb-5">
                  <i className={service.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal pt-1 mb-4">
                  {service.title}
                </h5>
                <p className="text-muted mb-4">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Service;
