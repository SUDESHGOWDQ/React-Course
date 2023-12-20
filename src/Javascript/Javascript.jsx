const App = () => {

    function clicked(){
      document.body.style.background="blue"
    }
    function blu(){
      let x = document.getElementById('ip1')
      x.value = x.value.toUpperCase()
    }
  
    const name = "sudesh"
    const age = 26
  
    return (
      <div>
        <button id="btn1" onClick={clicked}>Click</button>
        <input id='ip1' type="text" onBlur={blu}></input>
        <h1>My name is {name} and my age is {age}</h1>
        <h2>{`My name is ${name} and my age is ${age}`}</h2>
      </div>
    )
  }
  
  export default App