/*
create = (payload={username, boardId}) 
*/
import service from '../instance'
export const create = (payload) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/'+id)
export const get = () =>service.get('/')//boardId
