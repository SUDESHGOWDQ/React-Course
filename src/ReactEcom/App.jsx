import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './ReactEcom/Navbar'
import Home from './ReactEcom/Home'
import Cart from  './ReactEcom/Cart'
import { useState } from 'react'
import About from './ReactEcom/About'
import Data from './ReactEcom/Data'

const App = () => {
  const [search,setSearch]=useState("")
  const[cart,setCart]=useState([])


  function handleClick(item){
    setCart([...cart,item])
  }

  return (
    <div className='App'>
     <BrowserRouter>
     <Navbar setSearch={setSearch} size={cart.length}/>
      <Routes>
        <Route path='/' element={<Home search={search} handleClick={handleClick}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
        <Route path='/about/:aboutId' element={<About Data={Data}/>}/>
      </Routes>
     </BrowserRouter>     
    </div>
  )
}

export default App
