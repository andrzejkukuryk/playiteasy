import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoGuitar from "assets/logoGuitarHead.webp";
import "./footer.css";
import { SocialMedia } from "./socialMedia/socialMedia";

export function Footer() {
  return (
    <Container className="bg-black">
      <Row>
        <Col>
          <SocialMedia />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img
            src={logoGuitar}
            className="logoFooter"
            alt="Play It Easy logo"
          />
        </Col>
      </Row>
    </Container>
  );
}
