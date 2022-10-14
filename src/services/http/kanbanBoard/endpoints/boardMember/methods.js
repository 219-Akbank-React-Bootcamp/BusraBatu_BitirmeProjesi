
import service from '../instance'
export const create = (payload={username, boardId}) =>service.post('/', payload)
export const destroy = (id) =>service.delete('/'+id)
export const get = () =>service.get('/')//boardId
