/*
create = (payload={title, listId, description, duedate, order })
update = (payload={title, listId, description, duedate, order }, id)
*/
import service from '../instance'
export const create = (payload) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)
export const get = () =>service.get('/')//listId
export const getById = (id) =>service.get('/:'+id)
export const update = (payload, id) =>service.put('/:'+id, payload)