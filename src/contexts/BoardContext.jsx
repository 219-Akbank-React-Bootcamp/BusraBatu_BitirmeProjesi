import React,{useState, useEffect} from 'react'
import Board from '../components/Board/'
//bu sayfa icin todoapp contexte bak
const BoardContext = (props) => {
  //bir contexte olmasi gerekenler
  //export const initialState
  //export const...context=create context(dispatches:{addlist?}, state:initialState)
  //export const .....Provider=({children})=>{
  //  const [state, setState]= useState(initialState)
  //useeffect kullanabiliriz listler icin 7.hafta 2.ders 1saat 20.dakika
  //}
    const initialData={id: 0,
    title: "",
    ownerId: 0,}
    const [board,setBoard]=useState(initialData)
    useEffect(() => {
        fetchData().then(data=>setBoard(data))
      },[board])
      //boards.list().then(({ data }))=>setBoards(data))),[]}
      //dispatches.addlist=(list)=>{
      //  ...prev, lists:[...prev.lists, list]
     // }

  return (<BoardContext.Provider
    //value={{state, dispatches}}
  > {children} <Board/></BoardContext.Provider>
  
  )
}

export default BoardContext
//custom hook da konabailir
