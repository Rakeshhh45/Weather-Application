import Search from "./components/Search"
import Result from "./components/Result"
import axios from "axios";
import {  useState } from "react";
import './App.css'
import imges from './imges/weather.jpeg'


function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");

  const changeSearch = (value) => {
    setSearch(value);
  }

  const serachWeatherHandler = () => {
    if (search !== "") {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1d88318812d096f86493506bf3e9bbcc&units=metric`
      )
        .then(
          (response) => {
            console.log(response.data)
            setWeather(response.data)
          }
        )
        .catch(
          (error) => {
            console.log(error);
          }
        )
    }
  }

  return (
    <>
    <div className="bg">
    
    <div className="max-w-[1240px] mx-auto mt-2 p-5 shadow-2xl ">
      <Search searchData={search} eventHandler={changeSearch} searchWeather={serachWeatherHandler} />
      <Result weatherData={weather} />  
    </div>
    </div>
    </>
    
  );
}

export default App;
