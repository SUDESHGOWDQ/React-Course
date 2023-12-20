import axios from 'axios'
import { useEffect, useState } from 'react'
const App = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
       .then(res=>setData(res.data))
  })
  return (
    <div>
      {data.map((x)=>{
        return(
          <div key={x.id}>
            <p >{x.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
