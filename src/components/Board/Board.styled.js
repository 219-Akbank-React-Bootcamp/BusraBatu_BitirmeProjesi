import styled from 'styled-components'

export const Styled = styled.div`

  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;

.top-menu {
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
 
  background-color: #111827;
}
.workspace {
  flex: 1;
  width: 100%;
  overflow-x: auto;
  padding: 1rem;
  background-color: #f8f8f8;
  box-shadow: 5px 5px 5px grey;
}
.boards-button {
  color: #111827;
  background-color: aqua;
  border-radius: 1rem;
  border: none;
  padding: 0.5rem;
  width: 5rem;
}
.board-title{
  background-color: #fff;
  padding-top: .6rem;
  
}
.board-title-editable{
  width: 11.5rem;
  height: 2rem;
  border: none;
  border-radius: 1rem;
  overflow: hidden;
  font-size: 1.2rem;
  
}
.board-title-editable:focus{
  outline: none!important;
}

.icon{
 color:grey;
}
.board-title-visibility{
  color:#fff;
  display: flex;
  justify-content: space-between;
  gap:.5rem;
  font-weight: bold;
}
.settings-button{
    color:#fff;
    background-color: #111827;
    border: none;
}
.lists {
  min-width: fit-content;
  display: flex;
  gap: 2rem;
  
}
.add-list{
  min-width: 19rem;
    width:fit-content;
    height: fit-content;
    border-radius: 1rem;
    border: none;
    background-color: #fff;
    display: flex; 
    box-shadow: 1px 1px 1px grey; 
    padding: 1rem;
    
    
}
.board-title{
    border: none;
    border-radius: 1rem;
    padding: .5rem;
    width: 14rem;
    position: relative;
}
.add-list-button{
    border: none;
    width: 1.5rem;
    height:1.5rem;
    border-radius: 50%;
    color: #fff;
    background-color: red;
    margin: 1rem;
}
.add-list-button-desc{
  padding: 1rem .2rem;
  font-weight: bold;

}
`



