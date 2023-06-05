import React from "react";
import { ReactComponent as BiChevronUp } from "assets/bi-chevron-up.svg";
import { ReactComponent as BiChevronDown } from "assets/bi-chevron-down.svg";
import { Container, Row } from "react-bootstrap";

export function SortDoubleButton() {
  return (
    <Container>
      <Row>
        <BiChevronUp />
      </Row>
      <Row>
        <BiChevronDown />
      </Row>
    </Container>
  );
}
