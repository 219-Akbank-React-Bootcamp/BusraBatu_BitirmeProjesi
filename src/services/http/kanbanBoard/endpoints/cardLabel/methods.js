/*
create = (payload={cardId, labelId })
*/
import service from '../instance'
export const create = (payload) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)