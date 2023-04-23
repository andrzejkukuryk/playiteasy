import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Filters } from "./filters";

export function Search() {
  return (
    <Container>
      <Row>
        <Col className="p-0">
          <div
            style={{ borderColor: "red", borderWidth: 1, borderStyle: "solid" }}
          >
            {" "}
            search placeholder
          </div>
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
