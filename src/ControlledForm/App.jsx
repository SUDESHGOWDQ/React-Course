import { useState } from "react"

const App = () => {
    const[input,setIpnput]=useState({name:"",email:""})

   function handleChange(e){
    setIpnput({...input,[e.target.name]:e.target.value})
   }


    function handleClick(e){
        e.preventDefault()
        console.log(input);
    }
  return (
    <div>
        <form>
            <input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Enter your name"></input>
            <br></br>
            <input type="email" name="email" value={input.email} onChange={handleChange} placeholder="Enter Your Email"></input>
            <br></br>
            <button onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}

export default App