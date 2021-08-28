/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                <span className="text-primary font-weight-medium">
                  Food Tech{" "}
                </span>
                comes to revolutionize the food industry.
              </h1>
              <p className="text-muted mb-4 pb-2">
                Food tech is a brand that has impacted over the years. We
                implemented different technologies for improving the user
                experience. We bring you solutions for getting the best relation
                with the customer.
              </p>
              <a href="#" className="btn btn-warning">
                Available technologies{" "}
                <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image
                src="/images/imgPrincipal.jpg"
                width={700}
                height={400}
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
