import {useState,createContext,useContext,useEffect,} from 'react'
import instance from '../services/http/kanbanBoard/endpoints/instance'


const initialState= {
  isLoggedIn:localStorage.getItem('token')? true : false,
  token: localStorage.getItem('token') || '',
  username: localStorage.getItem('username') || '',
}

export const LoginContext = createContext({//bu kisimda yazilanlar asagida usecontext te yazilmasina yol aciyor
  login:null,
  logout:null, 
  state: initialState,
})
//burasi fonksiyon component gibi olacak
export const LoginProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    //bu kisim login methodunda bearer + token dendiginde calisti useeffeectsiz 7.hafta 2.ders dk52.40
    //bu haliyel list ekleme board ekelem yapilabilir???
    instance.interceptors.request.use((config) => {
      const _config = { ...config }
      _config.headers = {
        ...config.headers,
        authorization: 'Bearer ' + state.token,
      }
      return _config
    },(error)=>{
      Promise.reject(error)
    })

    /*bu kisim response da status code un gecerli olmadigi durumlar icin gecerli 
    instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if ([500, 401, 403].includes(error.response.status)) {
          setState((prev) => ({
            ...prev,
            isLoggedIn: false,
            token: '',
            username: '',
          }))
        }
      }
    ) */
  }, [state.token])

  const login = (token, username) => {
    setState({
      username,
      token,
      isLoggedIn: true,
    })

    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
    console.log('login mtehodu token:'+token)
  }
  const logout = () => {
    setState({
      username: '',
      token: '',
      isLoggedIn: false,
    })
    localStorage.setItem('token', '')
    localStorage.setItem('username', '')
  }

  return (//tek basina provider bir ise yaramaz usecontext ile kullanilmasi lazim
    <LoginContext.Provider
    //contextin altinda use context diyenler buradaki value lara erisebiliyor
      value={{
        login: login,
        logout: logout,
        state: state,
        
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export const useLoginContext = () => {
  const { state, login, logout } = useContext(LoginContext)
  return {
    username: state.username,
    isLoggedIn: state.isLoggedIn,
    
    login,
    logout,
  }
}
