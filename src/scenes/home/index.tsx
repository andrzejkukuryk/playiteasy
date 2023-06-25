import React from "react";
import { SheetList } from "./sheetList";
import { Header } from "./header";
import { Container, Row } from "react-bootstrap";
import { Footer } from "./footer/footer";
import { Title } from "./title/title";
import "./style.css";

export function Home() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row className="dimensions mx-auto">
        <Title />
      </Row>
      <Row className="dimensions mx-auto">
        <SheetList />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
