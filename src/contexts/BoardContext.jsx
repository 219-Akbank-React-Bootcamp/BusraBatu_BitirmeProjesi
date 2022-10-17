import React, { useState, useEffect, createContext, useContext } from "react";
import Board from "../components/Board/";
import { board } from "../services/http/kanbanBoard/endpoints/board";
import instance from '../services/http/kanbanBoard/endpoints/instance'
import { useLoginContext } from "./LoginContext";
//useeffect kullanabiliriz listler icin 7.hafta 2.ders 1saat 20.dakika

export const initialState = { boards: [] };
// export const useGetToken=()=>{
//   const { state } = useLoginContext();
//   useEffect(() =>{
//     instance.interceptors.request.use((config) => {
//         const _config = { ...config }
//         _config.headers = {
//           ...config.headers,
//           authorization: 'Bearer ' + state.token,
//         }
//         return _config
//       })},[state.token])

//       console.log('board context useeffect token'+ state.token)
// }
export const BoardContext = createContext({
  dispatches: {},
  state: initialState,
});


export const BoardProvider = ({ children }) => {

  const [state, setState] = useState(initialState);
  const dispatches={}
 
  // useEffect(() => {
  //   board.get().then(({ data }) => {
  //     setState((prev) => ({ ...prev, boards: data }));
  //   });
  // }, []);
 

  dispatches.addBoard=(board)=>{
    setState((prev)=>({...prev, 
      boards:[...prev.boards, board
    ]}))
    
  }
  dispatches.updateBoard=(id, board)=>{
    setState(prev=>({
      ...prev,
      boards: prev.boards.map(item=>({
          ...item,
          title : (id===item.id) ? board.title : item.title
      }))
  }))

  }
  return (
    <BoardContext.Provider value={{ state, dispatches, }}>
      {children}
    </BoardContext.Provider>
  );
};
export const useBoardContext = () => {
  return useContext(BoardContext);
};
