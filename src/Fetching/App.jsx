import { useEffect, useState } from "react"

const App = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(d=>setData(d))
  })
  return (
    <div>
    {data.map((e)=>{
      return(
        <section key={e.id}>
          <p>{e.name}</p>
        </section>
      )
    })}
    </div>
  )
}

export default App