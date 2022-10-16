/*
create = (payload={cardId, title})
update = (payload={title}, id)
*/
import service from '../instance'
export const create = (payload) =>service.post('checklist', payload)
export const destroy = (id) =>service.delete('checklist/'+id)
export const update = (payload, id) =>service.put('checklist/'+id, payload)