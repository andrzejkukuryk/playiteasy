import React, { useState } from "react";
import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import { Filters } from "./filters/filters";
import { ReactComponent as BiChevronDownBig } from "assets/bi-chevron-down-big.svg";
import classNames from "classnames";
import "./title.css";

export function Title() {
  const [open, setOpen] = useState(false);
  const [letRotate, setLetRotate] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setLetRotate(true);
  };

  const collapseButtonClass = classNames("ms-2", {
    rotateDownUp: open,
    rotateUpDown: !open && letRotate,
  });
  return (
    <Container className="mt-4 mb-3">
      <Row>
        <Col xs={5}>
          <h4 className="d-sm-none">List of songs</h4>
          <h3 className="d-none d-sm-inline">List of songs</h3>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            onClick={handleClick}
            aria-controls="difficultyFiltersCollapse"
            aria-expanded={open}
            className="text-white"
          >
            Select difficulty
            <BiChevronDownBig className={collapseButtonClass} />
          </Button>
        </Col>
      </Row>
      <Row>
        <Collapse in={open}>
          <div id="difficultyFiltersCollapse">
            <Filters />
          </div>
        </Collapse>
      </Row>
    </Container>
  );
}
