import styled from 'styled-components'

export const Styled = styled.div`.cardDetail {
  padding: 0 0 2rem 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50rem;
}
input {
  font-size: 1rem;
  border-radius: 0.2rem;
  border: 1px solid grey;
}
h3 {
  padding-left: 1rem;
}
input:focus {
  outline: none !important;
}
.cardDetail-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.cardDetail-menu {
  background-color: #111827;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.cardDetail-menu-options span {
  padding-right: 1rem;
}
.addCheckList{
    width:10rem;
    height: 5rem;
}
.cardDetail-info {
  color: grey;
  display: flex;
  padding: 1rem;
}

.cardDetail-cardTitle {
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid grey;
  height: 3rem;
  align-items: center;
  padding: 0 0.3rem;
}
.card-title {
  width: 90%;
  border: none;
}

.cardDetail-desc {
  margin: 0 1rem;
}
.cardDetail-desc input {
  width: 100%;
  height: 7rem;
  overflow-y: auto;
  padding: 0 1rem;
  font-weight: lighter;
}

.cardDetail-date input {
  margin: 1rem;
  height: 3rem;
  padding: .5rem;
}
.cardDetail-labels-title {
  display: flex;
  padding: 1rem 0;
}

.cardDetail-labels {
  padding: 0 1rem;
}
.cardDetail-labels-content input {
  height: 3rem;
  width: 100%;
}
.cardDetail-checklist {
  padding: 0 1rem;
}

.cardDetail-checklist-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cardDetail-checklist-title-left {
  display: flex;
  align-items: center;
}

.cardDetail-checklist-title span {
  margin: 1rem 0;
}
.cardDetail-checklist-progress{
  height: .6rem;
  border-radius: 1rem;
  width: 100%;
  border:1px solid #ccc
}
.cardDetail-checklist-progress-stick{
  height: .6rem;
  border-radius: 1rem;
background-color: #1379ec;
}
.cardDetail-checklist-progress-stick-active{
background-color: limegreen;
}
.cardDetail-checklist-addAnItem, .cardDetail-checklist-items {
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
 
}
.cardDetail-checklist-addAnItem-item, .cardDetail-checklist-items-item{
  width: 40rem;
  height: 3rem;
  margin: .5rem 1rem;
  padding-left: 1rem;
}
.cardDetail-checklist-addAnItem button, .cardDetail-checklist-items button{
  border-radius: 50%;
  width: 3rem;
  margin:.5rem 0;

  border: none;
  color: grey;
}

.cardDetail-comment-title {
  display: flex;
  margin: 0 1rem;
}
.cardDetail-comment-title span {
  padding-right: 0.5rem;
}
.cardDetail-comment-content {
  margin: 1rem 1rem;
  display: flex;
}
.cardDetail-comment-content img {
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  border-radius: 50%;
}
.cardDetail-comment-content input {
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
}
.cardDetail-comment-saveButton {
  margin: 0 4.5rem;
  padding: 0.5rem;
  width: 5rem;
  border-radius: 2rem;
  border: none;
  color: grey;
}`



