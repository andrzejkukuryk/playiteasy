import React from "react";
import { SheetList } from "./sheetList";
import { Header } from "./header";
import { Col, Container, Row } from "react-bootstrap";
import { Search } from "./search";
import { Footer } from "./footer/footer";

export function Home() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col>
          <Search />
        </Col>
        <Col xs={12} sm={9}>
          <SheetList />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
