import React, { useState } from "react";
import { Button } from "reactstrap";

const SearchForm = ({ searchCompanyAndJob }) => {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCompanyAndJob({ formData });
    setFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter company name"
        value={formData}
        onChange={handleChange}
      />
      <Button>Search</Button>
    </form>
  );
};

export default SearchForm;
