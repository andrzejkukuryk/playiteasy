import React from "react";
import "./App.css";
import { SheetList } from "./scenes/sheetList";
import { Header } from "./scenes/header";
import { Col, Container, Row } from "react-bootstrap";
import { Search } from "./scenes/search";

function App() {
  return (
    <div className="App">
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
      </Container>
    </div>
  );
}

export default App;
