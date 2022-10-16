import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'

import PasswordChangeForm from '../components/PasswordChangeForm'

const PasswordChangePage = (props) => {
  const navigate = useNavigate()
  const handlePasswordChange= (values) => {
    axios.post('http://localhost:80/auth/password-change', values, 
    {
      headers: {
        "Authorization": `Bearer ${props.istoken}`
      }
    }
    )
    .then(({ data }) => {
      props.onPasswordChange?.(data.token)
      navigate("/login")
    })
  }
  return <PasswordChangeForm onChangePassword={handlePasswordChange} />
}

export default PasswordChangePage