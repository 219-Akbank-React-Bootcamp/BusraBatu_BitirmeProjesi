/*
create = (payload={title, members})
update = (payload={title, members}, id)
*/

import service from '../instance'
export const create = (payload) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)
export const get = () =>service.get('/')
export const getById = (id) =>service.get('/:'+id)
export const update = (payload, id) =>service.put('/:'+id, payload)