import { useState } from "react"
import './App.css'

const api = {
  key:"a67532da5c1f94cb987e3381ee461fad",
  base:"https://api.openweathermap.org/data/2.5/weather"
}


const App = () => {
  const[weather,setWeather]=useState({})
  const[search,setSearch]=useState("")


  
  function handleClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSearch);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function handleSearch(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch(`${api.base}?q=${search}&lat=${latitude}&lon=${longitude}&appid=${api.key}&units=metric`)
    .then(res=>res.json())
    .then(data=>setWeather(data))
  }
  return (
    <div className="App">
      <section className="Sec">
          <input type="search" placeholder="Search City" onChange={(e)=>setSearch(e.target.value)}></input>
          <br></br>
          <button onClick={handleClick}>Search</button>
      {(typeof weather.main!="undefined")?(
        <div>
          <p>Name:{weather.name}</p>
          <p>Temp:{weather.main.temp}</p>
          <p>Cloud/Rain:{weather.weather[0].main}</p>
          <p>Description:{weather.weather[0].description}</p>
        </div>
      ):("Not Found")}
      </section>
    </div>
  )
}

export default App