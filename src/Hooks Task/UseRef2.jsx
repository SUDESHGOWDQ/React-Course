import { useRef} from "react"

const App = () => {
  const inputElement = useRef()

  function foc(){
    inputElement.current.focus()
  }
  return (
    <div>
      <input ref={inputElement}></input>
      <button onClick={foc}>Focus</button>
    </div>
  )
}

export default App