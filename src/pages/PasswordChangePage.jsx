import React from "react";
import { useNavigate } from "react-router";
import PasswordChangeForm from "../components/PasswordChangeForm";
import { auth } from "../services/http/kanbanBoard/endpoints/auth";
const PasswordChangePage = () => {
  const navigate = useNavigate();
  const handlePasswordChange = (values) => {
    auth.passwordChange(values).then(({ data }) => {
      //login(data.token, data.username)//basarili register sonrasi login sayfasina gitmesi icin bunu yaziyoruz
      console.log(data);
      navigate("/login");
    });
  };
  return <PasswordChangeForm onChangePassword={handlePasswordChange} />;
};

export default PasswordChangePage;
