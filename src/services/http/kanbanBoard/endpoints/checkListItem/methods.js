/* 
create = (payload={checklistId, isChecked, title})
update = (payload={ isChecked, title}, id
*/
import service from '../instance'
export const create = (payload) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)
export const update = (payload, id) =>service.put('/:'+id, payload)