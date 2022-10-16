import { useNavigate } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'
import { useLoginContext } from '../contexts/LoginContext'
import { auth } from '../services/http/kanbanBoard/endpoints/auth'

const RegisterPage = () => {
  const navigate = useNavigate()
  const {login} = useLoginContext()
  const handleRegister= (values) => {
    auth.register(values).then(({data})=>{
      //login(data.token, data.username)//basarili register sonrasi login sayfasina gitmesi icin bunu yaziyoruz
      console.log(data)
      navigate('/')
    })
  }

  return <RegisterForm onRegister={handleRegister} />
}

export default RegisterPage
