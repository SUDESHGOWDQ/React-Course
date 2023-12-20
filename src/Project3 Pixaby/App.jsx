import { useEffect, useState } from "react"
import './App.css'

const Modal=({imageUrl, onclose})=>{
  <div>
    <img src={imageUrl} onClick={onclose}></img>
  </div>
}

const App = () => {
    const[data,setData]=useState([])
    const[search,setSearch]=useState("")
    const[open,setOpen]=useState(false)
    const[select,setSelect]=useState(null)

    useEffect(()=>{
      fetch(`https://pixabay.com/api/?key=27465062-827a40ce7a6d1f80fc3a6743e&q=${search}&image_type=photo`)
      .then(res=>res.json())
      .then(d=>setData(d.hits))  
    })
  return (
    <div className="App">
    <input type="text" onChange={(e)=>setSearch(e.target.value)}></input>
        <div className="imagwrapper">
        {data && data.map((x)=>{
            return(
                <section key={x.id} className="sec">
                <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth} onClick={()=>{setSelect(x.webformatURL); setOpen(true)}}></img>

            </section>
            )
        })}
        </div>
        {!open && select && (
          <Modal imageUrl ={select} onClick={()=>setOpen(false)}/>
        )
        }
    </div>
  )
}

export default App