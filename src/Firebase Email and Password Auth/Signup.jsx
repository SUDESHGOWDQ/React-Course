import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import {auth} from './Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import './Form.css'

const Signup = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const usercredential = await createUserWithEmailAndPassword(auth,email,password)
            const user = usercredential.user
            sessionStorage.setItem('token',user.accessToken)
            sessionStorage.setItem('user',JSON.stringify(user))
            navigate('/')
        } catch (error) {
            console.log("error");
        }
    }

    return (
      <div className='Signup'>
        <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
          <input type='email' value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'></input>
          <br></br>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'></input>
          <br></br>
          <button type="submit">Signup</button>
          <p>Already Have an Account <Link to='/' style={{color:'red'}}>Login</Link></p>
        </form>
      </div>
    )
  }
  
  export default Signup
  