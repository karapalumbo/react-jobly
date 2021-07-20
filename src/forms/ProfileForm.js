import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import UserContext from "../UserContext";
import JoblyApi from "../api/api";

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    let userInfo = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
      email: formData.email,
    };

    let updatedInfo = await JoblyApi.saveProfile(formData.username, userInfo);
    setFormData((info) => ({
      ...info,
      password: "",
    }));
    setCurrentUser(updatedInfo);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((info) => ({
      ...info,
      [name]: value,
    }));
  }

  return (
    <div>
      <h2>Profile</h2>
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <p>{formData.username}</p>
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="firstName"
            name="firstName"
            id="firstName"
            placeholder={formData.firstName}
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="lastName"
            name="lastName"
            id="lastName"
            placeholder={formData.lastName}
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder={formData.email}
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Confirm password to make changes:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>

        <Button onClick={handleSubmit}>Save Changes</Button>
      </Form>
    </div>
  );
};

export default ProfileForm;
