import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { search } from "../../../../store/songsSlice";

export function TextInput() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(search(searchPhrase));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="search for artist or title"
          maxLength={50}
          value={searchPhrase}
          onChange={(e) => {
            setSearchPhrase(e.target.value);
          }}
        />
        <Button type="submit">search</Button>
      </InputGroup>
    </Form>
  );
}
