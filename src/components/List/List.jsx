import React, { useState } from "react";
import {Styled} from './List.styled'
import Card from "../Card";
import AddList from "../AddList/AddList";
import Dropdown from "../Dropdown/Dropdown";
import { useBoardContext } from "../../contexts/BoardContext";

const List = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const boardContext=useBoardContext();

  console.log(boardContext.state.boards)
  const [list, setList]=useState( {
        id: "",
        order: "",
        title: "",
        boardId: "",
        cards: [],
      },)
    

  return (
    <Styled>
    <div className="list-top">
      <p className="list-top-title">{list.title}</p>

      <div className="list-top-more" onClick={() => setShowDropdown(true)}>
        <span className="material-symbols-outlined">more_vert</span>
        {showDropdown && (
          <Dropdown
            class="list-dropdown"
            onClose={() => setShowDropdown(false)}
          >
            <p onClick={() => {}}>Remove List</p>
          </Dropdown>
        )}
      </div>
    </div>
    <div className="list-cards custom-scroll">
      {/* {
        props.list?.cards?.map((item)=> <Card key={item.id} card={item} removeCard={props.removeCard} listId={props.list?.id}/>)
      } */}
     <Card/>
    </div>
    <AddList
      text="Add a Card"
      placeholder="Card title"
      color="#838282"
      backgroundColor="#fff"
      // onClick={(value)=props.addCard(value, props.list.id)}
    />
</Styled>
    
  );
};

export default List;
