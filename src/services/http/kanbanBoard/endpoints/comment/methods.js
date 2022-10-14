import service from '../instance'
export const create = (payload={cardId, message,}) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)
