/* 
create = (payload={checklistId, isChecked, title})
update = (payload={ isChecked, title}, id
*/
import service from '../instance'
export const create = (payload) =>service.post('checklist-item', payload)
export const destroy = (id) =>service.delete('checklist-item/'+id)
export const update = (payload, id) =>service.put('checklist-item/'+id, payload)