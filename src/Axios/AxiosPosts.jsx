import { useState } from "react"
import axios from 'axios'
const App = () => {
  const[input,setInput]=useState({name:"",email:""})

  function handleChange(e){
    setInput({...input,[e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/users",input)
    .then(res=>console.log(res))
  }

  
  function handleUpdate(e) {
    e.preventDefault()
    axios.put("https://jsonplaceholder.typicode.com/users/1",input)
    .then(res=>console.log(res))
  }

  
  function handleDelete(e) {
    e.preventDefault()
    axios.delete("https://jsonplaceholder.typicode.com/users/1",input)
    .then(res=>console.log(res))
  }

  return (
    <div>
      <form>
        <input type="text" value={input.name} onChange={handleChange} name="name"></input>
        <br></br>
        <input type="email" value={input.email} onChange={handleChange} name="email"></input>
        <br></br>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button type="submit" onClick={handleUpdate}>Update</button>
        <button type="submit" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  )
}

export default App
