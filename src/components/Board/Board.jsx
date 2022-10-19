import React, { useState } from "react";
import List from "../List/List";
import AddList from "../AddList";
import { useBoardContext } from "../../contexts/BoardContext";
import { Styled } from "./Board.styled";
import { Link } from "react-router-dom";

const Board = (props) => {
  const [isEditTitle, setIsEditTitle] = useState(false);

  const boardsContext = useBoardContext();
  let initialBoard={id:0, title:'',}
  initialBoard={id:boardsContext.selectedBoard.id,
  title:boardsContext.selectedBoard.title,};
  
  const [board, setBoard]=useState(initialBoard)
  // conts [list, setList]= useState({
  //   id: "",
  //   order: "",
  //   title: "",
  //   boardId: "",
  //   cards: [],
  // })

  const handleSubmit = () => {
    setIsEditTitle(false);
    props.onEditBoardTitle(board.title, board.id );
   boardsContext.dispatches.updateBoard(board.id, board);
    

  };

  const handleChange = (e) => {
    setBoard((prev)=>({...prev, title:e.target.value}))
  };

  // const [lists, setLists] = useState([
  //   { id: "", title: "", ownerId: "", updatedAt: "", createdAt: "" },
  // ]);
  const handleAddList = (title) => {
   

   props.onAddList({title,boardId:board.id})
    // setLists([
    //   ...lists,
    //   {
    //     id: "",
    //     order: "",
    //     title: "",
    //     boardId: "",
    //     cards: [],
    //   },
    // ]);
    
   
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
              name="title"
              onChange={handleChange}
              className="board-title-editable"
              type="text"
             
            />
            <span
              onClick={handleSubmit}
              className="material-symbols-outlined icon"
            >
              check
            </span>
          </div>
        ) : (
          <div
            onClick={() => {
              setIsEditTitle(true);
            }}
            className="board-title-visibility"
          >
            <span className="material-symbols-outlined">visibility</span>
            {board.title}
          </div>
        )}
        {/* Kisi listesine gidilecek */}
        <button className="settings-button">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
      <div className="workspace">
        <div className="lists">
          
         <List/>

          <div className="add-list">
            <AddList
              onClick={(value) => handleAddList(value)}
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
