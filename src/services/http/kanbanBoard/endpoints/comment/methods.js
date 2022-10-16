/* 
create = (payload={cardId, message,})*/
import service from '../instance'
export const create = (payload) =>service.post('comment', payload)
export const destroy = (id) =>service.delete('comment/'+id)
