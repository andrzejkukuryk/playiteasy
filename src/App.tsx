import React from "react";
import "./App.css";
import { SheetList } from "./scenes/sheetList";
import { Header } from "./scenes/header";
import { Col, Container, Row } from "react-bootstrap";
import { Search } from "./scenes/search";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useSelector } from "react-redux";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
