import React, {  useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../Button'
import FormCard from '../FormCard/FormCard'
import Checkbox from '../Checkbox'
import Input from '../Input'

import { Styled } from './LoginForm.styled'


const LoginForm = (props) => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  })

  const handleChange= (e, v) => {
    const name = e.target.name
    setFormValues((prev) => ({ ...prev, [name]: v }))
  }

  const navigate = useNavigate()

  const handleSubmit = () => {
    props.onLogin?.(formValues)
  }
  return (
    <Styled>
      <FormCard title="Login">
        <Input
          onChange={handleChange}
          name="username"
          value={formValues.username}
          icon="person"
          type="text"
          placeholder="Enter your email"
          style={{ marginBottom: '15px' }}
        />
        <Input
          onChange={handleChange}
          name="password"
          value={formValues.password}
          icon="key"
          type="password"
          placeholder="Enter your password"
          style={{ marginBottom: '15px' }}
        />
        <div className="remember-forgot">
          <Checkbox label="Remember me" />
          <a href="#" className="link">
            Forgot password
          </a>
        </div>

        <Button onClick={handleSubmit}>Login now</Button>
        <p className="register-links">
          Don't have an account
          <Link className="link" to="/register">
            Sign up!
          </Link>
        </p>
      </FormCard>
    </Styled>
  )
}

export default LoginForm
