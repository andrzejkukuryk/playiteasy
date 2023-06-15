import react from "react";
import "./style.css";
import logo from "assets/logoPlain.png";
import icons from "assets/pieIcons.png";
import { Container, Row, Col } from "react-bootstrap";
import { TextInput } from "./textInput";

export function Header() {
  return (
    <Container className="bg-black">
      <Row>
        <Col xs={3} md={4} lg={6} xl={7}>
          <img src={logo} className="my-3 headerLogo" />
        </Col>
        <Col md={1} className="d-none d-md-block">
          <img src={icons} />
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <TextInput />
        </Col>
      </Row>
    </Container>
  );
}
