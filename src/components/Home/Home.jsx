import React from "react";
import { Styled } from "./Home.styled";
import { useState } from "react";


const Home = (props) => {
    const [boards, setBoards]=useState({})
  const handleLogout = () => {
    props.onLogout();
  };
  const handleAddBoard=()=> {
   props.onAddBoard({title:'Untitled board'}) 
   props.onBoards().map((item)=>{setBoards(item)})//belki useeffect icine almak gerekebilir
   //context kullansaydik contexte yer almasi gerekirdi
   //boards.list().then(({ data }))=>setBoards(data))),[]}
  }
  return (
    <Styled>
      <div className="top-menu">
        <p>Hoşgeldin {props.username}!</p>
        <span onClick={handleLogout} className="material-symbols-outlined">
          logout
        </span>
      </div>
      <div className="boards">
        <div className="title">Scrumboard App

        {boards.length ? boards.map((title,index)=>{return <div key={index} className="add-board-button">
          <span className="material-symbols-outlined icon">view_kanban</span>
          <p>title</p>
        </div>}): ""}
        <div onClick={handleAddBoard} className="add-board-button">
          <span className="material-symbols-outlined icon">add</span>
          <p>Add new board</p>
        </div>
        
        </div>
      </div>
    </Styled>
  );
};

export default Home;
