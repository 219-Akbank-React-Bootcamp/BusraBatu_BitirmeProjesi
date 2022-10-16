/*
register = (payload={username, password, passwordConfirm})
login=(payload= {username, password})
passwordChange = (payload={username, newPassword, newPasswordConfirm, oldPassword})
*/
import service from '../instance'
export const register = (payload) =>service.post('auth/register', payload)
export const login=(payload)=> service.post('auth/login', payload)
export const passwordChange = (payload) =>service.post('auth/password-change', payload)

