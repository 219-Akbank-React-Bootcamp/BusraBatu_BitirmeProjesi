import React from 'react'
import Board from '../components/Board'
import {board} from '../services/http/kanbanBoard/endpoints/board'
const BoardPage = () => {
  const handleEditBoardTitle=(values)=>{
    board.update(values).then(({data})=>{console.log(data)})
  }
  return (
    <Board onEditBoardTitle={handleEditBoardTitle}/>
  )
}

export default BoardPage