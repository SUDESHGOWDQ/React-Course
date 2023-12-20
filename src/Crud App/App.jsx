import { useState } from 'react'
import './App.css'

const App = () => {
    const[open,setOpen]=useState(false)
    const[user,setUser]=useState({name:"",email:"",adress:""})
    const[userData,setUserData]=useState([])


    function openModal(){
        setOpen(true)
    }

    function closeModal(){
        setOpen(false)
    }

   function addUser(){
    setUserData([...userData,user])
    closeModal()
   }

   
   function handleDelete(index){
    const d = userData.filter((v,i)=>i!==index)
    setUserData(d)
   }

   
  const handleEdit = () => {
    openModal(); 
  }

  





  return (
    <div className="App">
    <section>
        <h1>CRUD APP</h1>
        <button onClick={openModal}>Add User</button>
    </section>
    <hr></hr>
    <table border={1} rules='none'>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Adress</td>
                <td>Action</td>
            </tr>
        </thead>

        <tbody>
            {userData.length>0 && userData.map((user,index)=>{
                return(
                    <tr key={user.name}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.adress}</td>
                        <td>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={()=>handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
       
        <tfoot>
            <tr>
                <td colSpan={4}>@copyWrite SudeshGowda</td>
            </tr>
        </tfoot>
    </table>


    {
        open &&(
            <main>
                <form>
                    <label htmlFor='name'>Name</label>
                    <input type='text' value={user.name} onChange={(e)=>setUser({...user,"name":e.target.value})}></input>
                    <br></br>
                    <label htmlFor='email'>Email</label>
                    <input type='text' value={user.email} onChange={(e)=>setUser({...user,"email":e.target.value})}></input>
                    <br></br>
                    <label htmlFor='adress'>Adress</label>
                    <input type='text' value={user.adress} onChange={(e)=>setUser({...user,"adress":e.target.value})}></input>
                    <br></br>
                    <button onClick={addUser}>submit</button>
                </form>
            </main>
        )
    }




    </div>
  )
}

export default App