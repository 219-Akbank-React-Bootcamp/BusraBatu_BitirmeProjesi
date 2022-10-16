import React from "react";
import {Styled} from './Label.styled'

const Label = (props) => {
  let color = "";
  switch (props.type) {
    case "critical":
      color = "red";
      break;
    case "high priorty":
      color = "orange";
      break;
    case "low priorty":
      color = "yellow";
      break;
    case "done":
      color = "green";
      break;
    default:
      color = "blue";
      break;
  }
  return (
    <Styled> <div className="priorty-color">
    <span className="material-symbols-outlined" style={{ backgroundColor: { color } }}>
      label
    </span>
   
  </div></Styled>
   
  );
};

export default Label;
