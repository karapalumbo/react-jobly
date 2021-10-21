import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./SignupForm.css";

const SignupForm = ({ signup }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await signup(formData);
    if (res.success) {
      history.push("/companies");
    } else {
      throw new Error("Error signing up.");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((info) => ({
      ...info,
      [name]: value,
    }));
  }

  return (
    <Form className="signup-form" onSubmit={handleSubmit}>
      <h1>Welcome to Jobly.</h1>
      <h3>Your dream job is waiting!</h3>
      <div className="signup-container">
        <FormGroup>
          <Label for="username" className="label">
            Username
          </Label>
          <Input
            type="username"
            name="username"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="=password" className="label">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="=firstName" className="label">
            First Name
          </Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="=lastName" className="label">
            Last Name
          </Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="=email" className="label">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
      </div>
      <Button className="signup-btn">Signup</Button>
    </Form>
  );
};

export default SignupForm;
