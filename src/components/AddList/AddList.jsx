import React, { useState } from "react";
import {Styled} from './AddList.styled'

const AddList = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <Styled>
      {showEdit ? (
        <div className="editable-edit">
          <div className="editable-edit-top">
            <input
              className="editable-edit-title"
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              placeholder={props.placeholder}
            />
            <span
              onClick={() => {
                setShowEdit(false);
              }}
              className="material-symbols-outlined"
            >
              close
            </span>
          </div>
          <div>
            <button
              onClick={(e) => {
                if (props.onClick) props.onClick(inputValue);
                setShowEdit(false)
                setInputValue('')
              }}
              className="editable-add-button"
            >
              {props.buttonText || "Add"}
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            setShowEdit(true);
          }}
          className="add"
        >
          <button
            style={{ backgroundColor: props.backgroundColor }}
            className="add-button"
          >
            <span
              style={{ color: props.color }}
              className="material-symbols-outlined icon"
            >
              add
            </span>
          </button>
          <p className="add-button-desc"> {props.text}</p>
        </div>
      )}
    
    </Styled>
    
  );
};

export default AddList;
