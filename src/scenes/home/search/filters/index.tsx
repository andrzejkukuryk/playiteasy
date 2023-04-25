import React from "react";
import { Form } from "react-bootstrap";
import { DifficultyStars } from "../../../../components/difficultyStars";

export function Filters() {
  return (
    <div>
      <p>Choose difficulty:</p>
      <Form>
        <Form.Check
          type="checkbox"
          id="1star"
          label={<DifficultyStars difficulty={1} />}
        />
        <Form.Check
          type="checkbox"
          id="2star"
          label={<DifficultyStars difficulty={2} />}
        />
        <Form.Check
          type="checkbox"
          id="3star"
          label={<DifficultyStars difficulty={3} />}
        />
        <Form.Check
          type="checkbox"
          id="4star"
          label={<DifficultyStars difficulty={4} />}
        />
        <Form.Check
          type="checkbox"
          id="5star"
          label={<DifficultyStars difficulty={5} />}
        />
      </Form>
    </div>
  );
}
