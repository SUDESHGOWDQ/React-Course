import { useState } from "react"
import Custom from "./Custom"

const Two = () => {
    const[count,setCount]=useState(0)
    Custom(count)
  return (
    <div>
      <h1>Two</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Two
