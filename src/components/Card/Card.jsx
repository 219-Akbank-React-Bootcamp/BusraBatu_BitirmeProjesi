import React, { useState } from "react";
import Label from "../Label/Label";
import "./Card.css";
import CardDetail from "./CardDetail/CardDetail";

const Card = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <CardDetail onClose={() => setShowModal(false)} />}
      <div className="card" onClick={() => setShowModal(true)}>
        <div className="card-top">
          <div className="card-label">
            {props.card?.labels?.map((item, index) => {
              <Label key={index} text={item.text} color={item.color} />;
            })}
          </div>
          <div className="card-title">{props.card?.title}</div>
          <div className="card-date-done">
            {props.card?.date && (
              <div>
                <span class="material-symbols-outlined">schedule</span>
                {props.card?.date}
              </div>
            )}
            {props.card?.checkList && (
              <div>
                <span class="material-symbols-outlined">check_circle</span>
                {props.card?.checkList}
              </div>
            )}
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-open-doc">
            <span className="material-symbols-outlined">visibility</span>
            <span className="material-symbols-outlined">description</span>
          </div>
          <div className="card-comments">
            <span className="material-symbols-outlined">attachment </span>0
            <span className="material-symbols-outlined">chat</span> 2
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
