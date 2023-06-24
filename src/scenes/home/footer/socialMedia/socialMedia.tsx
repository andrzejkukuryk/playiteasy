import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as BiYoutubeSmall } from "assets/bi-youtube-small.svg";
import { ReactComponent as BiFacebook } from "assets/bi-facebook.svg";
import { ReactComponent as BiEnvelope } from "assets/bi-envelope.svg";

export function SocialMedia() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <a
            href="https://www.youtube.com/channel/UCk0ZZKxEIJXH0oDWjnBt2Iw"
            target="_blank"
            className="d-inline-block m-3 mb-1 text-white-50"
          >
            <BiYoutubeSmall />
          </a>

          <a
            href="https://www.facebook.com/PlayItEasy"
            target="_blank"
            className="d-inline-block m-3 mb-1 text-white-50"
          >
            <BiFacebook />
          </a>

          <a
            href="mailto: playiteasy2013@gmail.com"
            target="_blank"
            className="d-inline-block m-3 mb-1 text-white-50"
          >
            <BiEnvelope />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
