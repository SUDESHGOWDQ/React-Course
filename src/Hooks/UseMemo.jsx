import { useState,useMemo } from "react"

const App = () => {
  const[count,setCount]=useState(0)
  const power = ()=>{
    return count**2
  }
 const pow =  useMemo(() => power(count))

  return (
    <div>
      <h1>Count:{count}</h1>
      <h2>Power:{pow}</h2>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default App