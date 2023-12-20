import { useState } from "react";
import { account } from "./Appwrite";
import {v4 as uuidv4} from "uuid"
import { Link,useNavigate} from "react-router-dom";
import './Form.css'


const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response= await account.create(uuidv4(),email,password);
            console.log(response);
            alert("SignUp successfull")
            navigate('/')

        } 
        catch (error) {
            console.log(error)
            alert("signup failed")
        }
        
    }
  return (
    <div className="Forms">
      <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <input type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
         <br></br>
        <input type='password' placeholder='Enter Password' value={password}  onChange={(e)=>setPassword(e.target.value)}  />
         <br></br>
        <button>SignUp</button>
        <p>Already Have An Account <Link to='/'>Login</Link></p>
      </form>
    </div>
  )
}

export default SignUp
