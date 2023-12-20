import { useState } from "react"

const App = () => {
    const [ismyRoomisCleaned] = useState(true)
  return (
   <>
     {(ismyRoomisCleaned)?(<h1>Yes boss</h1>):(<h1>No Boss</h1>)}
   </>
  )
}

export default App
