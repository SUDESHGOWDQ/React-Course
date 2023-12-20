import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()
    function handleLogout(){
        navigate('/')
    }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
