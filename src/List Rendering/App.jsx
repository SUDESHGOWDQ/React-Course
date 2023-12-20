const App = () => {
    const names = ["Aditya","Vikas","Suraj"]
  return (
    <div>
      {names.map((name)=>{
        return(
            <h1 key={name}>My name is {name}</h1>
        )
      })}
    </div>
  )
}

export default App
