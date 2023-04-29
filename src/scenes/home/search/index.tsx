import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Filters } from "./filters";
import { TextInput } from "./textInput";

export function Search() {
  return (
    <Container>
      <Row>
        <Col className="p-0">
          <TextInput />
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          <Filters />
        </Col>
      </Row>
    </Container>
  );
}
