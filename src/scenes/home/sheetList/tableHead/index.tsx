import React from "react";
import { ReactComponent as BiChevronUp } from "assets/bi-chevron-up.svg";
import { ReactComponent as BiChevronDown } from "assets/bi-chevron-down.svg";
import { Container, Row, Col } from "react-bootstrap";
import { SortType, updateSortType } from "store/songsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import "./style.css";
import classNames from "classnames";

interface TableHeadProps {
  upperButton: SortType;
  lowerButton: SortType;
  activeSortType: SortType;
  label: string;
}

export function TableHead({
  upperButton,
  lowerButton,
  activeSortType,
  label,
}: TableHeadProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handleUpperClick = () => {
    dispatch(updateSortType(upperButton));
  };
  const handleLowerClick = () => {
    dispatch(updateSortType(lowerButton));
  };
  const upperButtonClass = classNames("sortButton", {
    activeSort: activeSortType === upperButton,
  });
  const lowerButtonClass = classNames("sortButton", {
    activeSort: activeSortType === lowerButton,
  });
  return (
    <Container className="p-0 bg-dark">
      <Row>
        <Col xs={3} md={2}>
          <Container className="p-0">
            <Row className="m-0">
              <button
                type="button"
                className={upperButtonClass}
                onClick={handleUpperClick}
              >
                <BiChevronUp />
              </button>
            </Row>
            <Row className="m-0">
              <button
                type="button"
                className={lowerButtonClass}
                onClick={handleLowerClick}
              >
                <BiChevronDown />
              </button>
            </Row>
          </Container>
        </Col>
        <Col xs={9} md={10} className="text-white fs-4 fw-light">
          {label}
        </Col>
      </Row>
    </Container>
  );
}
