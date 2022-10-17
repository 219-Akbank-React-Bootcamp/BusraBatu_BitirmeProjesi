import React, { useState } from "react";

import { Link } from "react-router-dom";
import Button from "../Button";
import FormCard from "../FormCard/FormCard";
import Checkbox from "../Checkbox";
import Input from "../Input";
import { Styled } from "./RegisterForm.styled";


const RegisterForm = (props) => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChange = (e, v) => {
    const name = e.target.name
    setFormValues((prev) => ({ ...prev, [name]: v }))
  }

  const handleSubmit = () => {
    props.onRegister?.(formValues)
  }

  return (
    <Styled>
      <FormCard title="Register">
        <Input
          onChange={handleChange}
          value={formValues.username}
          icon="mail"
          name="username"
          type="text"
          placeholder="Enter your username"
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          name="password"
          value={formValues.password}
          icon="key"
          type="password"
          placeholder="Create a password"
          style={{ marginBottom: "15px" }}
        />

        <Input
          name="passwordConfirm"
          onChange={handleChange}
          value={formValues.passwordConfirm}
          icon="key"
          type="password"
          placeholder="Confirm the password"
          style={{ marginBottom: "15px" }}
        />
        <div className="remember-forgot">
          <Checkbox label="I accept all terms & conditions" />
        </div>

        <Button onClick={handleSubmit}>Register now</Button>
        <p className="register-links">
          Already have an account
          <Link className="link" to="/login">
            Sign in!
          </Link>
        </p>
      </FormCard>
    </Styled>
  );
};

export default RegisterForm;
