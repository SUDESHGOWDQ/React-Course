import { useState ,useCallback} from 'react'

const App = () => {
  const[count,setCount]=useState(0)
  const decrement = useCallback(
    () => {
     setCount(count-1)
    },
    [count]
  )
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App