import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Routing/Home'
import About from './Routing/About'
import Navbar from './Routing/Navbar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<h1>404 ERROR</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
