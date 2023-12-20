import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import {auth} from './Firebase'
import { signInWithEmailAndPassword} from "firebase/auth"
import './Form.css'

const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const usercredential = await signInWithEmailAndPassword(auth,email,password)
            const user = usercredential.user
            sessionStorage.setItem('token',user.accessToken)
            sessionStorage.setItem('user',JSON.stringify(user))
            navigate('/home')
            alert("Login successful")
        } catch (error) {
            console.log("error");
            alert("You have entered wrong email or password")
        }
    }

    return (
      <div className='Signup'>
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
          <input type='email' value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'></input>
          <br></br>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'></input>
          <br></br>
          <button type="submit">Login</button>
          <p>Dont Have an Account <Link style={{color:'red'}} to='/signup'>signup</Link></p>
        </form>
      </div>
    )
  }
  
  export default Login
  