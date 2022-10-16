/*
create = (payload={title, members})
update = (payload={title, members}, id)
*/

import service from '../instance'
export const create = (payload) =>service.post('board', payload)
export const destroy = (id) =>service.delete('board/'+id)
export const get = () =>service.get('board')
export const getById = (id) =>service.get('board/'+id)
export const update = (payload, id) =>service.put('board/'+id, payload)