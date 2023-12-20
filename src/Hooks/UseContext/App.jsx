import{ createContext } from 'react'
import ChildA from  './Hooks/UseContext/ChildA'

const data1 = createContext()
const data2 = createContext()
const App = () => {
    const names = "sudesh"
    const age = 26
  return (
    <div>
      <data1.Provider value={names}>
      <data2.Provider value={age}>
        <ChildA/>
     </data2.Provider>
      </data1.Provider>
    </div>
  )
}
export default App
export {data1,data2}
