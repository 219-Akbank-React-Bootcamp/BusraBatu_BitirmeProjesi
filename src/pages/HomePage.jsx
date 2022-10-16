import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useLoginContext } from "../contexts/LoginContext"
import Home from "../components/Home"
import {board} from '../services/http/kanbanBoard/endpoints/board'
import instance from '../services/http/kanbanBoard/endpoints/instance'
const HomePage=()=>{

    const navigate = useNavigate()
    const {logout, username,  } = useLoginContext();
    let ownerId='';
    const handleLogout = () => {
        logout();
        navigate('/')
      };
      const handleAddBoard=(values)=>{
        board.create(values).then(({data})=>{
          ownerId=data.ownerId;
          navigate('/board')
        })
      }
      const handleBoards=()=>{
        board.get()
      }
      useEffect(()=>{
        instance.interceptors.request.use((config) => {
          const _config = { ...config }
          _config.headers = {
            ...config.headers,
            authorization: 'Bearer ' + localStorage.getItem('token'),
          }
          return _config
        })
      },[handleAddBoard])

return(
   
<Home ownerId={ownerId} username={username} onLogout={handleLogout} onAddBoard={handleAddBoard} onBoards={handleBoards}/>
)
}
export default HomePage;