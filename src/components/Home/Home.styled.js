import styled from "styled-components";

export const Styled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  background-color: #f8f8f8;
  .top-menu {
    width: 100%;
    height: 5rem;
    padding: 2rem 2rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: #fff;
    background-color: #111827;
  }
  .bottom {
    display: block;
    justify-content: center;
    text-align: center;
    
  }
  .title{
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    color:#111827;
    padding: 3rem;
  }
  .boards{
    display: flex;
    justify-content: center;
  
  }
 
  .add-board-button {
    width: 12rem;
    height: 12rem;
    display: block;
    justify-content: center;
    background-color: #fff;
    border-radius: 1rem;
    padding: 1rem;
    font-size: 1rem;
    box-shadow: 0px 0px 2px 0px rgba(17,24,39,0.56);
    cursor: pointer;
    margin-right: 3rem;
    text-decoration:none;
   
  }
 
  .icon {
    width: 3rem;
    height: 3rem;
    font-size: 3rem;
    color:#fff;
    background-color: aqua;
    border-radius: 50%;
    text-align: center;
    margin: 2rem;
   
  }
  .left{
    background-color: #fff;
    color: #8f8f8f;
   
  }
`;
