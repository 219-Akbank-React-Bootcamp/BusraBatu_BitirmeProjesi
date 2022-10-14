import service from '../instance'
export const create = (payload={cardId, title}) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)
export const update = (payload={title}, id) =>service.put('/:'+id, payload)