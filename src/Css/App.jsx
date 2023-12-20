import './App.css'
import Navbar from './Css/Navbar/Navbar'
import Header from './Css/Header/Header'
import Main from './Css/Main/Main'
import Footer from './Css/Footer/footer'
import Section from './Css/Section/Section'
const App = () => {
  return (
    <div className='App'>
    <Navbar/>
    <Header/>
    <Main/>
    <Section/>
    <Footer/>
    </div>
  )
}

export default App