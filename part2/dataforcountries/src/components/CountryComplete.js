import Language from './Language'
import axios from 'axios'
import { useState, useEffect } from 'react'

const api_key = process.env.REACT_APP_API_KEY

const CountryComplete = ({country}) => {

    const [weatherInfo, setWeatherInfo] = useState({})
    
    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]},${country.name.common}&units=metric&APPID=${apiKey}`
        console.log('effect weatherInfo')
        axios
          .get(url)
          .then(res => {
            console.log('promise fulfilled...', res.data)
            const icon = res.data.weather[0].icon
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
            const newWeatherInfo = {
              temp: res.data.main.temp,
              wind: res.data.wind.speed,
              url: iconUrl
            }
            setWeatherInfo(newWeatherInfo)
          })
      }, [])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
            <Language languages={Object.values(country.languages)} />
            </ul>
            <img src={country.flags.png}></img>
            <h2>Weather in {country.capital[0]}</h2>
            <p>temperature {weatherInfo.temp} Celcius</p>
            <img src={weatherInfo.url}></img>
            <p>wind {weatherInfo.wind} m/s</p>
        </div>
    )
}

export default CountryComplete