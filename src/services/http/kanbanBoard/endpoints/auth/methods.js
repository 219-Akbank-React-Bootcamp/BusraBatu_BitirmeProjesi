import service from '../instance'
export const register = (payload={username, password, passwordConfirm}) =>service.post('auth/register', payload)
export const login=(payload= {username, password})=> service.post('auth/login', payload)
export const passwordChange = (payload={username, newPassword, newPasswordConfirm, oldPassword}) =>service.post('auth/password-change', payload)

