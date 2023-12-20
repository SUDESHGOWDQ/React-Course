import { useState } from "react"

const App = () => {
    const[count,setCount]=useState(0)
    const[color,setColor]=useState('red')
    const[bgcolor,setBgcolor]=useState('black')
    const[name,setName]=useState("")
  return (
    <div>
         <input type={'text'} onChange={(e)=>setName(e.target.value)}></input>
         <h1>My Name is {name} </h1>
        <h1 style={{color:`${color}`,background:`${bgcolor}`}}>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setColor('green')}>Color</button>
        <button onClick={()=>setBgcolor('gray')}>BgColor</button>
    </div>
  )
}

export default App