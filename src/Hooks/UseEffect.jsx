import { useEffect, useState } from "react"

const App = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title = `${count}`
        let a = document.getElementById("btn1")
        a.addEventListener('click',()=>{
        document.body.style.background="crimson"
    })
    setTimeout(()=>{
        document.body.style.background="green"
        setInterval(()=>{
            document.body.style.background="purple"
        },100)
        setInterval(()=>{
            document.body.style.background="blue"
        },200)

    },1000)
    })

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button id="btn1">Red</button>
    </div>
  )
}

export default App