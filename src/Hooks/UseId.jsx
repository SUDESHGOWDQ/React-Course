import { useId } from "react"

const App = () => {
    const id1 = useId()
    const id2 = useId()
  return (
    <div>
      <h1 id={id1}>Hello</h1>
      <h1 id={id2}>Bye</h1>
    </div>
  )
}

export default App
