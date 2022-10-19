import React, { useState } from 'react'
import Board from '../components/Board'
import List from '../components/List'
import {board} from '../services/http/kanbanBoard/endpoints/board'
import {list} from '../services/http/kanbanBoard/endpoints/list'
import { useBoardContext } from '../contexts/BoardContext'
const BoardPage = () => {
  const boardContext=useBoardContext()
 
  const handleEditBoardTitle=(payload, id )=>{
    board.update(payload, id ).then(({data})=>{console.log(data)})
  }
  const handleAddList=(values)=>{
    list.create(values).then(({data})=>{ 
      console.log('list create sonrasi list',data)
      boardContext.dispatches.addList(data);
     
      })
  }
 
//   const handleGetBoardById=(boardId)=>{
//     board.getById(boardId).then(({data})=>{boardContext.state.boards.map((item)=>{item.id===boardId? {[item]:data}: item})
//     console.log('gelen data byid', data)
//     console.log('handlegetboardbyid boards', boardContext.state.boards)
//   })
//onBoard={handleGetBoardById}
// }
  return (<div>
    <Board  onAddList={handleAddList} onEditBoardTitle={handleEditBoardTitle}/>
    
    </div>
  )
}

export default BoardPage