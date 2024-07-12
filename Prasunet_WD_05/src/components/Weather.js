import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"
import "./Weather.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useToast } from "@chakra-ui/react"
const Weather=()=>{

    const [weatherData,setWeatherData]=useState(null)
    const [city,setCity]=useState()
    const toast=useToast()

    const allIcons={
        "01d":clear_icon,
        "01n":clear_icon,
        "02d":cloud_icon,
        "02n":cloud_icon,
        "03d":clear_icon,
        "03n":clear_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,



    }

    const search=async(city)=>{

        if(!city){
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              return
        }
        
        try {
            const API_ID="49b8f7c13fc405c5abbacb45d3303848"
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_ID}`
            const {data}=await axios.get(url)
            
            const icon=allIcons[data.weather[0].icon] || clear_icon
            setWeatherData({
                humidity:data.main.humidity,
                windSpeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name,
                icon:icon

            })
        } catch (error) {
            setWeatherData(null)
            toast({
                title: "Error in fetching data",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });

            
        }

    }
    useEffect(()=>{
        search(city)
    },[])
    return(
        <div className="Weather">
            <div className="search-bar">
                <input value={city} type="text" placeholder="Search" onChange={(e)=>setCity(e.target.value)}/>
                <img src={search_icon} alt="" onClick={()=>search(city)}/>
            </div>
            {weatherData?
            <>      <img src={weatherData.icon} alt="" className="weather-icon"/>
                    <p className="temperature">{weatherData.temperature}°C</p>
                    <p className="location">{weatherData.location}</p>
                    <div className="weather-data">
                        <div className="col">
                            <img src={humidity_icon} alt=""/>
                            <div>
                                <p>{weatherData.humidity} %</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="col">
                            <img src={wind_icon} alt=""/>
                            <div>
                                <p>{weatherData.windSpeed}</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
            </>:<></>}
            
            
        </div>
    )
}

export default Weather