import { useState } from "react"

const App = () => {
    const countries = [
        {name:'India',states:[{name:"Karnataka"},{name:"Tamilnadu"}]},
        {name:'Pakistan',states:[{name:"lahore"},{name:"Siria"}]},
        {name:'America',states:[{name:"LosAngels"},{name:"SansFransisco"}]},
        {name:'United Kingdom',states:[{name:"London"},{name:"ireland"}]},
        {name:'Africa',states:[{name:"kenya"},{name:"Tanzania"}]},
    ]

    const [city,setCity]=useState([])

    function handleCountry(e){
        setCity(countries.find(i=>i.name===e.target.value).states)
    }
    
  return (
    <div>
        <select onChange={handleCountry}>
            {countries.map((item)=><option key={item.name} value={item.name}>{item.name}</option>)}
        </select>
        <select>
        {city.map((item)=><option key={item.name} value={item.name}>{item.name}</option>)}
        </select>
    </div>
  )
}

export default App