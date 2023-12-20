import Child from './Props/FChild'
const App = () => {
    const age = 25
    function clic(){
        document.body.style.background="crimson"
    }
    function clic2(){
        document.body.style.background="green"
    }
  return (
    <div>
        <Child name="sudesh" age={age} clic={clic} />
        <Child name="Aditya" age="21" clic2={clic2} />
    </div>
  )
}

export default App