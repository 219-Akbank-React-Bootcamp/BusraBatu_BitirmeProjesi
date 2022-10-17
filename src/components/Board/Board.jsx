import React, { useState } from "react";

import List from "../List/List";
import Editable from "../Editable/Editable";
import { useBoardContext } from "../../contexts/BoardContext";
import { Styled } from "./Board.styled";
import { Link } from "react-router-dom";

const Board = (props) => {
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [title, setTitle] = useState("");
  
  const [board, setBoard]= useState('');
  const {state, dispatches,}= useBoardContext();

  const handleChangeTitle = (e) => {
    setTitle (()=>e.target.value)
    console.log(title);
  };
  const handleSubmitTitle = () => {
    setIsEditTitle(false);
    props.onEditBoardTitle( )
 

  };
  const [lists, setLists] = useState([
    { id: "", title: "", ownerId: "", updatedAt: "", createdAt: "" },
  ]);
    const addList = (title) => {
    setLists([
      ...lists,
      {
        id: "",
        order: "",
        title: "",
        boardId: "",
        cards: [],
      },
    ]);
  };
  

  return (
    <Styled>
      <div className="top-menu">
        <Link className="boards-link" to="/">
          <button className="boards-button">
            <span className="material-symbols-outlined">assignment</span>
          </button>
        </Link>
        {isEditTitle ? (
          <div className="board-title">
            <input
              onChange={handleChangeTitle}
              className="board-title-editable"
              type="text"
              name="boards"
            />
            <span
              onClick={handleSubmitTitle}
              className="material-symbols-outlined icon"> check</span>
          </div>
        ) : (
          <div
            onClick={() => {
              setIsEditTitle(true);
            }}
            className="board-title-visibility"
          >
            <span className="material-symbols-outlined">visibility</span>
            Untitled Board
          </div>
        )}
        {/* Kisi listesine gidilecek */}
        <button className="settings-button">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
      <div className="workspace">
        <div className="lists">
          {/* {lists.map((item) => (
            <List
              key={item.id}
              list={item}
              removeList={removeList}
              addCard={addCard}
              removeCard={removeCard}
            />
          ))} */}

          <div className="add-list">
            <Editable
              onClick={(value) => addList(value)}
              displayClass="add-list-field"
              text="Add a list"
              placeholder="List title"
              color="#fff"
              backgroundColor="red"
            />
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Board;
