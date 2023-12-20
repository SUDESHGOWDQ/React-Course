import { useState, useEffect } from 'react'
import { GoogleAuthProvider,onAuthStateChanged ,signInWithPopup } from 'firebase/auth'
import { auth} from './firebase'
import Home from './Home'


function Login() {

  const [user, setUser] = useState(null)

  useEffect(() => {
      onAuthStateChanged(auth, user => {
        if(user) {
          setUser(user)
        } else {
          setUser(null)
        }
      })
  })

  

const handleClick = async () => {
  const provider = new GoogleAuthProvider()
  try {
  await signInWithPopup(auth, provider) 
  } 
  catch (error) {
    console.log(error)
  }
}

  return (
    <div className='App' >
      { user ?(<Home/>):<button onClick={handleClick}>Login with Google</button>}
      </div>
  )
}

export default Login