import React from "react";
import Modal from "../../Modal";
import "./CardDetail.css";
import { useState } from "react";

const CardDetail = (props) => {
  //  const [showModal, setShowModal] = useState(false);
  //   const addCheckList = () => {
  //   setShowModal(true);
  //    console.log(showModal)
  //    return (<Modal onClose={() => props.onClose()}>
  //    <div className="addCheckList">
  //      <input type="text" />
  //      <button>Add</button>
  //    </div>
  //  </Modal>)

  //   };
  const calculatePercent = () => {
    if (!values.tasks?.length) return 0;
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return (completed / values.tasks?.length) * 100;
  };

  return (
    <Modal onClose={() => props.onClose()}>
      <div className="cardDetail">
        <div className="cardDetail-box">
          <div className="cardDetail-menu">
            <div className="cardDetail-menu-options">
              <span className="material-symbols-outlined">edit_calendar</span>
              <span className="material-symbols-outlined">label</span>
              <span className="material-symbols-outlined">account_circle</span>
              <span className="material-symbols-outlined">attachment</span>
              <span className="material-symbols-outlined">task</span>

              <span className="material-symbols-outlined">more_horiz</span>
            </div>
            <div>
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>

          <div className="cardDetail-info">
            <h3>Untitled Board</h3>
            <span className="material-symbols-outlined">
              keyboard_arrow_right
            </span>
            <h3>ornek liste</h3>
          </div>
          <div className="cardDetail-cardTitle">
            <input
              className="card-title"
              type="text"
              placeholder="Test Card 1"
            />
            <span className="material-symbols-outlined">visibility</span>
          </div>
          <div className="cardDetail-desc">
            <input type="text" placeholder="Description" />
          </div>
          <div className="cardDetail-date">
            <h3>Due Date</h3>
            <input type="date" />
          </div>
          <div className="cardDetail-labels">
            <div className="cardDetail-labels-title">
              <span className="material-symbols-outlined">label</span>
              <h3>Labels</h3>
            </div>
            <div className="cardDetail-labels-content">
              <input type="color" name="" id="" />
            </div>
          </div>
          <div className="cardDetail-checklist">
            <div className="cardDetail-checklist-title">
              <div className="cardDetail-checklist-title-left">
                <span className="material-symbols-outlined">check_box</span>
                <h3>Ornek Checklist</h3>
              </div>
              <span className="material-symbols-outlined">more_vert</span>
            </div>
            <div className="cardDetail-checklist-progress">
              <div
                className="cardDetail-checklist-progress-stick"
                style={{
                  width: `${calculatePercent()}%`,
                  backgroundColor:
                    calculatePercent() === 100 ? "limegreen" : "",
                }}
              ></div>
            </div>
            <div className="cardDetail-checklist-content">
              <div className="cardDetail-checklist-addAnItem">
                <input
                  className="cardDetail-checklist-addAnItem-item"
                  type="text"
                  placeholder="Add an item"
                />
                <button>
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="cardDetail-checklist-items">
                <input type="checkbox" />
                <input
                  className="cardDetail-checklist-items-item"
                  type="text"
                  placeholder="Item 1"
                />
                <button>
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </div>
          <div className="cardDetail-comment">
            <div className="cardDetail-comment-title">
              <span className="material-symbols-outlined">comment</span>
              <h3>Comment</h3>
            </div>
            <div className="cardDetail-comment-content">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
              <input type="text" placeholder="Add comment" />

              <div>
                <button className="cardDetail-comment-saveButton">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CardDetail;
