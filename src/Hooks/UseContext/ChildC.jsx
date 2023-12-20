import { data1,data2 } from '../../App'
import { useContext } from 'react'
const ChildC = () => {
    const name = useContext(data1)
    const age = useContext(data2)
  return (
    <div>
      <h1>My name is {name} and my age is {age} </h1>
    </div>
  )
}

export default ChildC
