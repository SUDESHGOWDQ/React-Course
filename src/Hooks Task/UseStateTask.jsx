import { useState } from 'react'
import './App.css'
const App = () => {
  const[count,setCount]=useState(0)
  const[price,setPrice]=useState(0)
  const[msg,setMsg]=useState("Buy")
  return (
    <div className="App">
    <section>
      <div className="Cards">
        <img src="https://content.jdmagicbox.com/comp/pune/l8/020pxx20.xx20.170118080206.n1l8/catalogue/kfc-aundh-pune-fast-food-dr8csr6fd9.jpg" height={'150px'} width={'150px'}></img>
        <br></br>
        <button onClick={()=>setCount(count+1)}>+</button>
        <span>Qty:{count}</span>
        <button onClick={()=>setCount(count-1)}>-</button>
        <br></br>
        <br></br>
        <p>Price:<span>{price}</span></p>
        <button onClick={()=>setPrice(count*50)}>Price</button>
        <br></br>
        <button onClick={()=>setMsg("Thank you for Visiting")}>{msg}</button>
      </div>
    </section>
    </div>
  )
}

export default App