import  { useReducer } from 'react'

const App = () => {
    const initialState = 0
    const [count, dispatch] = useReducer(reducer, initialState)
    function reducer(state,action){
        switch (action) {
            case "Incre":
                return state+1;
                   
            default:
                return state;
        }
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch("Incre")}>+</button>
    </div>
  )
}

export default App
