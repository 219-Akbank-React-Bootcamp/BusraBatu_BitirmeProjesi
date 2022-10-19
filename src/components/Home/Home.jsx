import React from "react";
import { useBoardContext } from "../../contexts/BoardContext";
import { Styled } from "./Home.styled";
import { useState } from "react";

import { Link } from "react-router-dom";

const Home = (props) => {
  const boardsContext = useBoardContext();

  const handleLogout = () => {
    props.onLogout();
  };
  const handleAddBoard = () => {
   
    props.onAddBoard({ title: "Untitled Board" })
    
  };

  return (
    <Styled>
      <div className="top-menu">
        <p>Hoşgeldin {props.username}!</p>
        <span onClick={handleLogout} className="material-symbols-outlined">
          logout
        </span>
      </div>
      <div className="bottom">
        <div className="title">
          Scrumboard App</div>
          <div className='boards'>
         
          {boardsContext.state.boards.length > 0
            ?(boardsContext.state.boards.map((board) => {
                return (<Link key={board.id} className="add-board-button" to='/board'>  <div onClick={()=>{boardsContext.selectedBoard={title:board.title, id:board.id}}}  >
                <span className="material-symbols-outlined icon left">
                  view_kanban
                </span>
                <p>{board.id}</p>
              </div></Link>
                
                );
              }))
            : ""}
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
