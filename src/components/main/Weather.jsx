import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCurrentLocation, positionOptions } from "./Geolocation";

const Weather = () => {
     const navigate = useNavigate();
     const { location, error } = useCurrentLocation(positionOptions);
     const [city, setCity] = useState("");
     const [weather, setWeather] = useState("");
     const [temp, setTemp] = useState("");
     const GEOCODING_KEY = process.env.REACT_APP_GOOGLE_API;
     const WEATHER_KEY = process.env.REACT_APP_WEATHER_API;

     useEffect(() => {
          if (error) {
               return console.log("error");
          }

          if (location) {
               const geo_key = `${GEOCODING_KEY}`;
               const weather_key = `${WEATHER_KEY}`;
               const weatherData = () => {
                    axios.all([
                         axios.get(
                              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${geo_key}`
                         ),
                         axios.get(
                              `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${weather_key}&units=metric`
                         ),
                    ])
                         .then(
                              axios.spread((res1, res2) => {
                                   const geo_res = res1.data;
                                   const weather_res = res2.data;
                                   setCity(
                                        geo_res.plus_code.compound_code.substring(
                                             13
                                        )
                                   );
                                   setWeather(weather_res.weather[0].icon);
                                   setTemp(Math.floor(weather_res.main.temp));
                              })
                         )
                         .catch(() => {
                              alert("요청 에러");
                         });
               };
               weatherData();
          }
     }, [location]);

     return (
          <>
               <StMainImageBanner>
                    <img alt="" src="/icons/mainbanner.png" />
                    <StWeatherContainer>
                         <StWeatherInfoWrap>
                              <StWeatherIcon>
                                   <img
                                        alt=""
                                        src={
                                             (weather === "01d" &&
                                                  "/icons/01d.png") ||
                                             (weather === "02d" &&
                                                  "/icons/02d.png") ||
                                             ((weather === "03d" ||
                                                  "04d" ||
                                                  "03n" ||
                                                  "04n") &&
                                                  "/icons/03d.png") ||
                                             ((weather === "09d" ||
                                                  "09n" ||
                                                  "10d" ||
                                                  "10n") &&
                                                  "/icons/09d.png") ||
                                             ((weather === "11d" || "11n") &&
                                                  "/icons/11d.png") ||
                                             ((weather === "13d" || "13n") &&
                                                  "/icons/13d.png") ||
                                             ((weather === "50d" || "50n") &&
                                                  "/icons/50d.png")
                                        }
                                   />
                              </StWeatherIcon>
                              <StWeatherInfo>
                                   <span className="temp">
                                        {`${temp}˚C`} ㅣ
                                   </span>
                                   <span className="city-name">{city}</span>
                                   <p>오늘은 어디로 떠나볼까요?</p>
                              </StWeatherInfo>
                              <span
                                   className="shortcut"
                                   onClick={() => navigate("/detail")}
                              >
                                   바로가기
                              </span>
                         </StWeatherInfoWrap>
                    </StWeatherContainer>
               </StMainImageBanner>
          </>
     );
};

export default Weather;

const StMainImageBanner = styled.div`
     width: 100%;
     height: 55vh;
     position: relative;
     display: flex;
     img {
          object-position: center center;
          object-fit: cover;
          width: 100%;
          height: 520px;
     }
`;

const StWeatherContainer = styled.div`
     width: 20%;
     height: 5vh;
     border: 1px solid gray;
     position: absolute;
     right: 13%;
     bottom: 10%;
     padding: 10px;
     background-color: #e1e5e4;
`;

const StWeatherInfoWrap = styled.div`
     display: flex;
     position: relative;
     .shortcut {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 20px;
          border: 1px solid black;
          border-radius: 15px;
          background-color: rgba(0, 0, 0, 0.1);
          position: absolute;
          bottom: 3px;
          right: 10px;
          cursor: pointer;
     }
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

const StWeatherInfo = styled.div`
     .temp {
          font-weight: bolder;
     }
`;
