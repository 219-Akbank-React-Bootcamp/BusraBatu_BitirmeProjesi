/*
create = (payload={cardId, title})
update = (payload={title}, id)
*/
import service from '../instance'
export const create = (payload) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)
export const update = (payload, id) =>service.put('/:'+id, payload)