import SignUp from "./AppwriteAuth/SignUp"
import Login from "./AppwriteAuth/Login"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./AppwriteAuth/Home"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
