import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateSearchQuery } from "store/songsSlice";
import { ReactComponent as BiSearch } from "assets/bi-search.svg";
import "./textInput.css";

export function TextInput() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(updateSearchQuery(searchPhrase));
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
          className="bg-secondary border border-light-subtle border-end-0 text-light"
        />
        <Button
          type="submit"
          variant="secondary"
          className="bg-secondary border border-light-subtle border-start-0 me-3 me-md-2"
        >
          <BiSearch />
        </Button>
      </InputGroup>
    </Form>
  );
}
