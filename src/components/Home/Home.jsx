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
    boardsContext.dispatches.addBoard({ title: "Untitled Board" });
    props.onAddBoard({ title: "Untitled Board" })
    console.log('handleaddboar', boardsContext.state);
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
            ?(boardsContext.state.boards.map((board, index) => {
                return (<Link className="add-board-button" to='/board'>  <div key={index} >
                <span className="material-symbols-outlined icon left">
                  view_kanban
                </span>
                <p>{board.title}</p>
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
