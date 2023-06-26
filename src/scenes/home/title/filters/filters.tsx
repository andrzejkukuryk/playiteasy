import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { difficultyFiltersSelector } from "store/selectors";
import { addDifficulty } from "store/songsSlice";
import { Form } from "react-bootstrap";
import { DifficultyStars } from "components/difficultyStars/difficultyStars";

export function Filters() {
  const checked = useSelector(difficultyFiltersSelector);
  const dispatch = useDispatch();

  const chechCheched = (diff: number) => {
    if (checked.includes(diff)) {
      return true;
    }
    return false;
  };

  const handleChange = (diff: number) => {
    dispatch(addDifficulty(diff));
  };

  return (
    <div className="mt-2">
      <Form>
        <Form.Check
          reverse
          type="checkbox"
          id="1star"
          checked={chechCheched(1)}
          onChange={() => handleChange(1)}
          label={<DifficultyStars difficulty={1} />}
        />
        <Form.Check
          reverse
          type="checkbox"
          id="2star"
          checked={chechCheched(2)}
          onChange={() => handleChange(2)}
          label={<DifficultyStars difficulty={2} />}
        />
        <Form.Check
          reverse
          type="checkbox"
          id="3star"
          checked={chechCheched(3)}
          onChange={() => handleChange(3)}
          label={<DifficultyStars difficulty={3} />}
        />
        <Form.Check
          reverse
          type="checkbox"
          id="4star"
          checked={chechCheched(4)}
          onChange={() => handleChange(4)}
          label={<DifficultyStars difficulty={4} />}
        />
        <Form.Check
          reverse
          type="checkbox"
          id="5star"
          checked={chechCheched(5)}
          onChange={() => handleChange(5)}
          label={<DifficultyStars difficulty={5} />}
        />
      </Form>
    </div>
  );
}
