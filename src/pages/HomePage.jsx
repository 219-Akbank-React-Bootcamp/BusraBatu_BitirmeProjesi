import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../contexts/LoginContext";
import { useBoardContext } from "../contexts/BoardContext";
import Home from "../components/Home";
import { board } from "../services/http/kanbanBoard/endpoints/board";

const HomePage = () => {
  const navigate = useNavigate();
  const { logout, username } = useLoginContext();
 const {state, dispatches}= useBoardContext();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  
  const handleAddBoard = (values) => {
    board.create(values).then(({data})=>{ //board creta sonrasi backendden veri dondu
      dispatches.addBoard(data);//uygulamadaki state e koydum
     
      });

  };

  return (
    <Home
      username={username}
      onLogout={handleLogout}
      onAddBoard={handleAddBoard}
     
    />
  );
};
export default HomePage;
