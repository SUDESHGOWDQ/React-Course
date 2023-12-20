import { auth} from './firebase'
const Home = () => {
  return (
    <div>
           <h1>Home</h1>
           <button onClick={() => auth.signOut()}>Logout</button>
        </div>
  )
}

export default Home