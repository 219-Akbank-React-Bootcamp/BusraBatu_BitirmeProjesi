import React, { useState } from "react";
import "./List.css";
import Card from "../Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";
const List = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <div className="list">
      <div className="list-top">
        <p className="list-top-title">{props.list?.title}</p>

        <div className="list-top-more" onClick={() => setShowDropdown(true)}>
          <span className="material-symbols-outlined">more_vert</span>
          {showDropdown && (
            <Dropdown
              class="list-dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard(props.list?.id)}>Remove List</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="list-cards custom-scroll">
        {
          props.list?.cards?.map((item)=> <Card key={item.id} card={item} removeCard={props.removeCard} listId={props.list?.id}/>)
        }
       <Card/>
      </div>
      <Editable
        text="Add a Card"
        placeholder="Card title"
        color="#838282"
        backgroundColor="#fff"
        // onClick={(value)=props.addCard(value, props.list.id)}
      />
    </div>
  );
};

export default List;
