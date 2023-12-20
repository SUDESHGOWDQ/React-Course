import { useState } from "react";
import {useNavigate,Link} from "react-router-dom"
import { account } from "./Appwrite";
import './Form.css'

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const navigate=useNavigate();
    async function handleSubmit(e){
        e.preventDefault();

        try {
            const response=await account.createEmailSession(email,password);
            console.log(response);

            alert("Login successfull")
            navigate("/home")
        } catch (error) {
            console.log(error)
            alert("Login failed")
        }
        
    }
  return (
    <div className="Forms">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}  /> 
        <br></br>
        <input type='password' placeholder='Enter Password' value={password}  onChange={(e)=>setPassword(e.target.value)}  /> 
        <br></br>
        <button>Login</button>
        <p>Dont Have An Account <Link to='/signup'>Signup</Link></p>
      </form>
    </div>
  )
}

export default Login
