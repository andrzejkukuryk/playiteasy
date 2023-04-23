import React from "react";
import { Form } from "react-bootstrap";

export function Filters() {
  return (
    <div>
      <p>Choose difficulty:</p>
      <Form>
        <Form.Check type="checkbox" id="1star" label="1 star" />
        <Form.Check type="checkbox" id="2star" label="2 stars" />
        <Form.Check type="checkbox" id="3star" label="3 stars" />
        <Form.Check type="checkbox" id="4star" label="4 stars" />
        <Form.Check type="checkbox" id="5star" label="5 stars" />
      </Form>
    </div>
  );
}
