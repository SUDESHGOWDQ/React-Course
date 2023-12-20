import { useNavigate } from 'react-router-dom';
import {auth} from './Firebase'
import { signOut } from 'firebase/auth';
const Home = () => {

  const navigate = useNavigate()

  async function handleLogout(e){
    e.preventDefault();
    await signOut(auth)
    navigate('/')
    alert("Think Twice😉")
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
