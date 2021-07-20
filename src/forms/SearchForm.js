import React, { useState } from "react";
import { Button } from "reactstrap";

const SearchForm = ({ search }) => {
  const [formData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    search(formData);
    setFormData(formData);
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Enter search term."
        value={formData}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
