import { useState, useContext, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import {useStateContext} from './context/Context';
//images
import Clear from './assets/images/Clear.jpg';
import Fog from './assets/images/fog.png';
import Cloudy from './assets/images/Cloudy.jpg';
import Rainy from './assets/images/Rainy.jpg';
import Snow from './assets/images/snow.jpg';
import Stormy from './assets/images/Stormy.jpg';
import Sunny from './assets/images/Sunny.jpg';
import Haze from './assets/images/haze.jpg';

function App() {

  const [input, setInput] = useState("");
  const [textColor, setTextColor] = useState("white");
  const [background, setBackground] = useState(Sunny);
  const { weather, setPlace, temp, windSpeed, location, place } = useStateContext();


  const submitCity = () => {
    setPlace(input);
    setInput("");
  }

  useEffect(() => {
    if (weather === 'Sunny') {
      setBackground(Sunny);
      setTextColor(' #50555a');
    }
    else if (weather === 'Thunderstorm') {
      setBackground(Stormy);
      setTextColor('white');
    }
    else if (weather === 'Snow') {
      setBackground(Snow);
      setTextColor('white');
    }
    else if (weather === 'Rain' || weather === 'Drizzle') {
      setBackground(Rainy);
      setTextColor('white');
    }
    else if (weather === 'Clouds') {
      setBackground(Cloudy);
      setTextColor('white');
    }
    else if (weather === 'Fog' || weather === 'Mist') {
      setBackground(Fog);
      setTextColor(' #50555a');
    }
    else if (weather === 'Clear') {
      setBackground(Clear);
      setTextColor(' #50555a');
    }
    else if (weather === 'Haze') {
      setBackground(Haze);
      setTextColor(' #50555a');
    }

  }, [weather])

  
  
  

  




  return (
    <div className='App' style={{backgroundImage: `url(${background})`
    }}>
      <div className='navbar mx-4'>
        <h1 style={{color: textColor}}>WEATHER  APP</h1>
        <input className="form-control me-2 " onKeyUp={(e)=>{
          if (e.key === 'Enter') {
            submitCity();
          }
        }} type="search" placeholder="Search" aria-label="Search"  style={{ width: "300px" }} value={input} onChange={(e) =>setInput(e.target.value)} />
      </div>
      <div className='content'>
        <WeatherCard temperature = {temp.temp} windSpeed = {windSpeed} humidity = {temp.humidity} 
        location = {location} weather={weather} minTemp={temp.temp_min} maxTemp={temp.temp_max} pressure={temp.pressure}/>
        {/* <MiniCards/> */}
      </div>
    </div>
  );
}

export default App;
