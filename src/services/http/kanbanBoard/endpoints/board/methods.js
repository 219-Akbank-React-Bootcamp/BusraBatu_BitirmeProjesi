import service from '../instance'
export const create = (payload={title, members}) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/:'+id)
export const get = () =>service.get('/')
export const getById = (id) =>service.get('/:'+id)
export const update = (payload={title, members}, id) =>service.put('/:'+id, payload)