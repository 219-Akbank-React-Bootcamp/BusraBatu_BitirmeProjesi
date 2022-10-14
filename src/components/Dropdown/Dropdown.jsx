import React, { useEffect, useRef } from "react";
import "./Dropdown.css";
const Dropdown = (props) => {
    const dropdownRef = useRef();

    const handleClick = (event) => {
      if (
        dropdownRef &&
        !dropdownRef?.current?.contains(event?.target) &&
        props.onClose
      )
        props.onClose();
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
  
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  
    return (
      <div
        style={{position: "absolute",top:"100%",right:"0",}}
        ref={dropdownRef}
        className={`dropdown custom-scroll ${props.class ? props.class : ""}`}
      >
        {props.children}
      </div>
    );
  }

export default Dropdown;
