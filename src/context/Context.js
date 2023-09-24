import React, { createContext, useContext, useState, useEffect } from 'react'

const StateContext = createContext();

export const ContextProvider =  ({children}) => {
    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState({});
    const [windSpeed, setWindSpeed] = useState("");
    const [place, setPlace] = useState('kanpur');
    const [location, setLocation] = useState('');

    const apiKey = process.env.REACT_APP_APIKEY;
    const fetchData = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKey}`;
        const options = {
            method: 'GET',
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setLocation(`${result.name}, ${result.sys.country}`);
            setWeather(result.weather[0].main);
            setTemp(result.main);
            setWindSpeed(result.wind.speed);
            // console.log(result.weather[0].main);
        
        } catch (error) {
            console.error(error);
        }
    }

//    fetchData();
    useEffect(() => {
        fetchData();
    }, [place])




    

  return (
    <StateContext.Provider value={{
        weather,
        setPlace,
        temp,
        windSpeed,
        location,
        place
    }}>
        {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext);