import { useState } from "react"
import Custom from "./Custom"

const One = () => {
    const[count,setCount]=useState(0)
    Custom(count)
  return (
    <div>
      <h1>One</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default One
