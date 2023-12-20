

const App = () => {
  return (
    <div>
      <h1 className="bg-slate-900 text-white text-center">Hello</h1>
      <section style={{height:'100vh',width:'100%',backgroundImage:'url("https://cdn.pixabay.com/photo/2023/11/14/14/59/mountains-8387889_1280.jpg")'}}   className="flex justify-center items-center flex-wrap bg-transparent bg-cover bg-no-repeat" >
        <form className="bg-slate-600 text-center rounded-2xl  shadow-xl shadow-white opacity-90" style={{height:'auto', width:'300px'}}>
           <h1 className="font-bold text-yellow-300 text-3xl">Signup Form</h1>
          <input className="m-3 p-3 bg-transparent border-b-2 border-red-600 text-center outline-none focus:bg-black "  placeholder="Enter your Name" type="text"></input>
          <br></br>
          <input className="m-3 p-3  bg-transparent border-b-2 border-red-600 text-center outline-none "  placeholder="Enter your Email" type="email"></input>
          <br></br>
          <input className="m-3 p-3 bg-transparent border-b-2 border-red-600 text-center outline-none"    placeholder="Enter your Password" type="Password"></input>
          <br></br>
          <button className="w-40 border-white border-2 rounded-xl p-3 m-3 bg-orange-500 hover:bg-black hover:text-white hover:scale-125 duration-200 delay-1000 ease-linear">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default App
