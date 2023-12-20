import { useEffect, useRef, useState } from "react"

const App = () => {
  const[name,setName]=useState("")
  const count = useRef(0)
  useEffect(()=>{
    return ()=>{
      count.current = count.current+1
    }
  },[name])
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}></input>
      <h1>My Name is {name}</h1>
      <h1>{count.current}</h1>
    </div>
  )
}

export default App