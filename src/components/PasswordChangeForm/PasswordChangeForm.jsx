import React, { useState } from "react";
import Button from "../Button";
import FormCard from "../FormCard";
import Input from "../Input";
import { Styled } from "./PasswordChangeForm.styled";
import { Link } from "react-router-dom";

const PasswordChangeForm = (props) => {
  const [formValues, setFormValues] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = (e, v) => {
    const name = e.target.name;
    setFormValues((prev) => ({ ...prev, [name]: v }));
  };

  const handleSubmit = () => {
    props.onChangePassword?.(formValues);
  };

  return (
    <Styled>
     
      <FormCard title="Change Password">
        <Input
          onChange={handleChange}
          value={formValues.username}
          icon="person"
          name="username"
          type="text"
          placeholder="Enter your username"
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          value={formValues.oldPassword}
          icon="key"
          name="oldPassword"
          type="password"
          placeholder="Enter your old password"
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          value={formValues.newPassword}
          name="newPassword"
          icon="key"
          type="password"
          placeholder="Create a password"
          style={{ marginBottom: "15px" }}
        />

        <Input
          name="newPasswordConfirm"
          onChange={handleChange}
          value={formValues.newPasswordConfirm}
          icon="key"
          type="password"
          placeholder="Confirm the password"
          style={{ marginBottom: "15px" }}
        />
        <Button onClick={handleSubmit}>Change Password</Button>
        <Link className="link" to="/login">
        <Button>Back to Login Page</Button>
      </Link>
       
      
        {/* {formValues.newPassword === formValues.oldPassword &&
        formValues.newPassword !== "" ? (
          <p className="register-links">Eski parolayla aynı olamaz. </p>
        ) : (
          ""
        )}
        {formValues.newPassword !== formValues.newPasswordConfirm &&
        formValues.newPasswordConfirm !== "" ? (
          <p className="register-links">Parolalar eşleşmemektedir. </p>
        ) : (
          ""
        )} */}
      </FormCard>
    </Styled>
  );
};

export default PasswordChangeForm;
