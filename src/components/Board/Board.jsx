import React, { useState } from "react";
import "./Board.css";
import List from "../List/List";
import Editable from "../Editable/Editable";
import { BoardContext } from "../../contexts/BoardContext";

const Board = (props) => {
  const [editTitle, setEditTitle] = useState(false);

  const handleChangeTitle = (e) => {
    props.title = e.target.value;
  };
  const [lists, setLists] = useState([
    { id: "", title: "", ownerId: "", updatedAt: "", createdAt: "" },
  ]);
  const addCard = (title, listId) => {
    card();
    const index = lists.findIndex(item =>item.id === listId);
    if (index < 0) return;
    const tempLists = [...lists];
    tempLists[index].cards.push(card);
    setLists(tempLists);
  };
  const removeCard=(cardId,listId)=>{
const listIndex=lists.findIndex(item => item.id === listId)
if (listIndex < 0) return;
const cardIndex=lists[listIndex].cards.findIndex(item => item.id === cardId)
if (cardIndex < 0) return;

const tempLists=[...lists];
tempLists[listIndex].cards.splice(cardIndex,1)
setLists(tempLists);
  }
  const addList=(title)=>{
    setLists([...lists,{
      id: "",
      order: "",
      title: "",
      boardId: "",
      cards: [],


    }])
  }
  const removeList=(listId)=>{
   const tempLists=lists.filter(item=>item.id!==listId)
   setLists(tempLists)
  }
  const card = {
    id: Math.floor(Math.random() * 100),
    title: "",
    description: "",
    order: "",
    duedate: "",
    updatedAt: "",
    createdAt: "",
    listId: "",
    labels: [],
    checklist: [],
    comments: [],
  };
  const list = {
    id: Math.floor(Math.random() * 100),
    order: "",
    title: "",
    createdAt: "",
    updatedAt: "",
    boardId: "",
    cards: [],
  };

  return (
    <div className="board">
      <div className="top-menu">
        {/* onClick={<Link BoardListPage ></Link>} */}
        <button className="boards-button">
          <span className="material-symbols-outlined">assignment</span>
        </button>
        {/* board ismi degistirildiktan sonra check button calismiyor */}
        {editTitle ? (
          <div className="board-title" onClick={editTitle}>
            <input
              onChange={handleChangeTitle}
              className="board-title-editable"
              type="text"
              name="boards"
            />
            <span
              onClick={() => {
                setEditTitle(false);
              }}
              className="material-symbols-outlined icon"
            >
              check
            </span>
          </div>
        ) : (
          <div
            onClick={() => {
              setEditTitle(true);
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
          {lists.map((item)=>(< List key={item.id}  list={item} removeList={removeList} addCard={addCard}
          removeCard={removeCard}/>))}

          
          <div className="add-list">
            <Editable
            onClick={(value)=> addList(value)}
              displayClass="add-list-field"
              text="Add a list"
              placeholder="List title"
              color="#fff"
              backgroundColor="red"
             
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
