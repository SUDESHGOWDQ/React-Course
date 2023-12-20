import { useEffect, useState } from "react"
import {database} from './Firestore Crud/firebase'
import { collection ,addDoc,doc, getDocs,deleteDoc} from 'firebase/firestore';
import './App.css'

const App = () => {
  const [name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[val,setVal]=useState([])
  

  useEffect(()=>{
    getData()
  })


  const value = collection(database,'crud')
  
  async function handleCreate(){
    await addDoc(value,{'Name':name,'Email':email,})
    alert('Record Created')
    setName("")
    setEmail("")
  }

  async function getData(){
     const dbval = await getDocs(value)
     setVal(dbval.docs.map((x)=>({...x.data(),id:x.id})))
  }

  async function handleDelete(id){
    const deleteData = doc(database , 'crud', id)
    await deleteDoc(deleteData)
    alert("Record Deleted")
  }



  return (
    <div className='App'>
    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name"></input>
    <br></br>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"></input>
    <br></br>
    <button onClick={handleCreate}>Create</button>
    <section className="sec">
      {val.length>0 && val.map((x)=>{
        return(
          <div key={x.Name} className="Card">
          <p>{x.Name}</p>
          <p>{x.Email}</p>
          <button onClick={()=>handleDelete(x.id)}>Delete</button>
          </div>
        )
      })}
    </section>
    </div>
  )
}

export default App