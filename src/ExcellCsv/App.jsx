import{ useState } from 'react'
import { CSVLink} from 'react-csv'
import './App.css'

const App = () => {
  const [name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[place,setPlace]=useState("")
  const[phno,setPhno]=useState("")
  const[college,setCollege]=useState("")
  const[yop,setYop]=useState("")
  const [data,setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {"Name":name,"Email":email,"Place":place,"PHONE":phno,"College":college,"Yop":yop}
    setData([...data,newData]);
    setEmail("")
    setName("")
    setPlace("")
    setPhno("")
    setCollege("")
  }

  console.log(data);
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
        <input type='text' onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Enter Your Name'></input><br/>
        <br></br>
        <label htmlFor='email'>Email</label>
        <input type={'email'} onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='Enter Your Email'></input><br/>
        <br></br>
        <label htmlFor='place'>Place</label>
        <input type={'text'} onChange={(e)=>{setPlace(e.target.value)}} value={place} placeholder='Enter Your Place'></input><br/>
        <br></br>
        <label htmlFor='phno'>PH-NO</label>
        <input type={'tel'} onChange={(e)=>{setPhno(e.target.value)}} value={phno} placeholder='Enter Your PH-No'></input><br/>
        <br></br>
        <label htmlFor='college'>College</label>
        <input type={'text'} onChange={(e)=>{setCollege(e.target.value)}} value={college} placeholder='Enter Your College'></input><br/>
        <br></br>
        <label htmlFor='yop'>Year Of Passed Out</label>
        <input type={'date'} onChange={(e)=>{setYop(e.target.value)}} value={yop} placeholder='Enter Your Yop'></input><br/>
        <br></br>
        <button type='submit'>Submit</button>
        <button><CSVLink style={{textDecoration:'none',color:'white'}} data={data}>Export</CSVLink></button>
      </form>
    </div>
  )
}

export default App
