import React,{useState, useEffect} from 'react'
import instance from '../services/http/kanbanBoard/endpoints/instance'

const BoardContext = (props) => {
    const initialData={id: 0,
    title: "",
    ownerId: 0,}
    const [board,setBoard]=useState(initialData)
    useEffect(() => {
        fetchData().then(data=>setBoard(data))
      },[board])
const fetchData = () =>{
  /*Burada axios kullanmamak icin instance olusturulan yapiyi aliyoruz ve async olan islemde
   interceptor la datayi karsiliyoruz. */
 instance.interceptors.response.use((response) => {
  return response.board
});}
  return (
    <div></div>
  )
}

export default BoardContext
