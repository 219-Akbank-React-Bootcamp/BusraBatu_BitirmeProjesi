/*
create = (payload={title, listId, description, duedate, order })
update = (payload={title, listId, description, duedate, order }, id)
*/
import service from '../instance'
export const create = (payload) =>service.post('card', payload)
export const destroy = (id) =>service.delete('card/'+id)
export const get = () =>service.get('card')//listId
export const getById = (id) =>service.get('card/'+id)
export const update = (payload, id) =>service.put('card/'+id, payload)