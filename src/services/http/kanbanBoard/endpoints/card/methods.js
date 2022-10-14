import service from '../instance'
export const create = (payload={title, listId, description, duedate, order }) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)
export const get = () =>service.get('/')//listId
export const getById = (id) =>service.get('/:'+id)
export const update = (payload={title, listId, description, duedate, order }, id) =>service.put('/:'+id, payload)