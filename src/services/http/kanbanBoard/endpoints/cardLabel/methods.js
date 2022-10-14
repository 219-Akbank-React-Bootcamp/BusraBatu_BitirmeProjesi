import service from '../instance'
export const create = (payload={cardId, labelId }) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)