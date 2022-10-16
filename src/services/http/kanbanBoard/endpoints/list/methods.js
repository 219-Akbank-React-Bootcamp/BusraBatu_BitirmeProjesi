/*  create = (payload={title, boardId, order })
    update = (payload={title, boardId, order }, id) 
*/
import service from '../instance'
export const create = (payload) =>service.post('list', payload)
export const destroy = (id) =>service.delete('list/'+id)
export const get = (boardId) =>service.get('list?boardId='+boardId)
export const getById = (id) =>service.get('list/'+id)
export const update = (payload, id) =>service.put('list/'+id, payload)