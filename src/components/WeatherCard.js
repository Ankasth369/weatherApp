import React, { useEffect, useState } from 'react';
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'


export default function WeatherCard({temperature, windSpeed, humidity, location, weather, minTemp, maxTemp, pressure}) {
    
    const date = new Date();
    const [icon, setIcon] = useState(sun)
    // const [time, setTime] = useState(`${date.toLocaleTimeString().slice(0, 4)} ${date.toLocaleTimeString().slice(8, 10)}`);

    // setInterval(() => {
    //   setTime(`${date.toLocaleTimeString().slice(0, 4)} ${date.toLocaleTimeString().slice(8, 10)}`)
    // }, 2000);

    useEffect(() => {
      if (weather === 'Clear') {
        setIcon(sun);
      }
      else if (weather === 'Clouds' || weather === 'Haze') {
        setIcon(cloud);
      }
      else if (weather === 'Fog') {
        setIcon(fog);
      }
      else if (weather === 'Thunderstorm') {
        setIcon(storm);
      }
      else if (weather === 'Rain') {
        setIcon(rain);
      }
    }, [weather])

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    

    return (


        <div className='weatherCard'>
            <div className='tempData'>
                <img src={icon} id='weathercon' alt="" className='icon'/>
                <p className='temp'>
                    {temperature}&deg;C
                </p>
            </div>
            <div className="place">
                {location}
            </div>
            <div className="dateTime d-flex justify-content-around">
                <div>{weekday[date.getDay()]}</div>   <div>{`${date.toLocaleTimeString().slice(0, 4)} ${date.toLocaleTimeString().slice(8, 10)}`}</div>
            </div>
            <div className="speedAndHumidity">
                <div className="windSpeed">Windspeed <br />{windSpeed} Km/h</div>
                <div className="humidity">Humidity <br />{humidity} gm/m3</div>
            </div>
            <div className='minMaxTemp d-flex justify-content-between mx-5'>
              <div>Min Temp. {minTemp}&deg;C</div>  <div>Max Temp. {maxTemp}&deg;C</div>
            </div>
            <div className="pressure d-flex justify-content-between mx-5">
                <div>Pressure</div>      <div>{pressure} hPa</div>
            </div>
            <hr />
            <div className='weather'>
                {weather}
            </div>
        </div>
    )
}
