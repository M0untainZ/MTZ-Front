import React, {useState, useEffect} from "react";
import styled from "styled-components"
import axios from "axios";
import {useCurrentLocation, positionOptions} from "./Geolocation"

const Weather = () => {
    const { location, error } = useCurrentLocation(positionOptions);
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState("");
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API;

    useEffect(() => {
        if (error) {
          return console.log("error");
        }

        if (location) {
          const weather_KEY = `${WEATHER_API_KEY}`;
          const weatherData = async () => {
              await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${weather_KEY}&units=metric&lang=kr`
              )
              .then((response) => {
                console.log(response)
                setCity(response.data.name);
                setWeather(response.data.weather[0].icon);
                setTemp((Math.floor(response.data.main.temp)));
              })
              .catch(() => {
                alert("Local navigation failed.");
              });
          } 
          weatherData();
        }
      }, []);

    return (
      <>
        <StMainImageBanner>
          <img src="/icons/img.jpg" />
          <StWeatherContainer>
            <StWeatherInfo>
              <StWeatherIcon>
                <img src={(weather === "01d" && "/icons/01d.png") || (weather === "01n" && "/icons/01n.png")} />
              </StWeatherIcon>
              <p className="weather-info">{`${temp}˚C`} {city}</p>
            </StWeatherInfo>
            <StMension>
                
            </StMension>
          </StWeatherContainer>
        </StMainImageBanner>
      </>
    );
}

export default Weather;


const StMainImageBanner = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
  display: flex;
  img {
    object-position: center center;
    object-fit: cover;
    width: 100%;
    height: 30vh;
  }
`;

const StWeatherContainer = styled.div`
    width: 20%;
    height: 5vh;
    border: 1px solid gray;
    position: absolute;
    right: 15%;
    bottom: 5%;
    padding: 10px;
    background-color: #E1E5E4;
`;

const StWeatherInfo = styled.div`
    display: flex;
`;

const StWeatherIcon = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  img {
      width: 40px;
      height: 40px;
      }
`;

const StMension = styled.div`

`;