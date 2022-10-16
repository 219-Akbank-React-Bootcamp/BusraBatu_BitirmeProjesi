import React from "react";
import {Styled} from './Modal.styled'
const Modal = (props) => {
  return (
    <Styled> <div className="modal"
    onClick={()=>(props.onClose ? props.onClose(): '')}
    >
      <div className="modal-content custom-scroll" onClick={(e)=>e.stopPropagation()}>
        {props.children}
      </div>
    </div></Styled>
   
  );
};

export default Modal;
