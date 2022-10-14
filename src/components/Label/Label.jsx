import React from "react";
import "./Label.css";

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
    <div className="priorty-color">
      <span className="material-symbols-outlined" style={{ backgroundColor: { color } }}>
        label
      </span>
     
    </div>
  );
};

export default Label;
