import service from '../instance'
export const create = (payload={checklistId, isChecked, title}) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)
export const update = (payload={ isChecked, title}, id) =>service.put('/:'+id, payload)