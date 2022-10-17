import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

import { auth } from "../services/http/kanbanBoard/endpoints/auth";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (values) => {
    auth.register(values).then(({ data }) => {
      console.log(data);
      navigate("/login");
    });
  };

  return <RegisterForm onRegister={handleRegister} />;
};

export default RegisterPage;
