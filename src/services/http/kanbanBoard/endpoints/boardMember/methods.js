/*
create = (payload={username, boardId}) 
*/
import service from '../instance'
export const create = (payload) =>service.post('board-member', payload)
export const destroy = (id) =>service.delete('board-member/'+id)
export const get = (boardId) =>service.get('board-member?boardId='+boardId)//boardId
