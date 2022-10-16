/*
create = (payload={cardId, labelId })
*/
import service from '../instance'
export const create = (payload) =>service.post('card-label', payload)
export const destroy = (id) =>service.delete('card-label/'+id)
export const get=()=>service.get('card-label');