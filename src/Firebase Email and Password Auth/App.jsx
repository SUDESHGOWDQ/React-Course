import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Firebase Email and Password Auth/Login'
import Signup from './Firebase Email and Password Auth/Signup'
import Home from './Firebase Email and Password Auth/Home'

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
