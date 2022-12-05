import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCurrentLocation, positionOptions } from "./Geolocation";
import Mapmodal from "./modal/Mapmodal";
import { getRegionTag } from "../../shared/api";

const Weather = () => {
     const navigate = useNavigate();
     const { location, error } = useCurrentLocation(positionOptions);
     const [city, setCity] = useState("");
     const [weather, setWeather] = useState("");
     const [temp, setTemp] = useState("");
     const [modal, setModal] = useState(false);
     const GEOCODING_KEY = process.env.REACT_APP_GOOGLE_API;
     const WEATHER_KEY = process.env.REACT_APP_WEATHER_API;

     const onModalOpen = () => {
          setModal(!modal);
     }

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
                                   setCity(geo_res.plus_code.compound_code.substring(13));
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
                    <StMap onClick={onModalOpen}>
                         <img alt="" src="/icons/map_search.png" />
                         <span>지도보기</span>
                    </StMap>
                    { modal && <Mapmodal open={modal} onClose={() => {setModal(false)}}>
                              <StMapContainer>
                                   <img alt="" src="/icons/main_map.png" />
                                   <div className="seoul">
                                        <p>서울</p>
                                        <span>5</span>
                                   </div>
                                   <div className="gangwon">
                                        <p>강원</p>
                                        <span>5</span>
                                   </div>
                                   <div className="gyeonggi">
                                        <p>경기</p>
                                        <span>12</span>
                                   </div>
                                   <div className="gyeongsang">
                                        <p>경상</p>
                                        <span>5</span>
                                   </div>
                                   <div className="chungchung">
                                        <p>충청</p>
                                        <span>4</span>
                                   </div>
                                   <div className="jeolla">
                                        <p>전라</p>
                                        <span>4</span>
                                   </div>
                                   <div className="jeju">
                                        <p>제주</p>
                                        <span>1</span>
                                   </div>
                              </StMapContainer>
                         </Mapmodal>}
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

const StMap = styled.div`
     width: 150px;
     height: 50px;
     position: absolute;
     bottom: 10%;
     left: 15%;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: #185B6E;
     color: #ffffff;
     gap: 10px;
     cursor: pointer;
     img {
          width: 18px;
          height: 18px;
     }
`;

const StMapContainer = styled.div`
     width: 100%;
     height: 60vh;
     margin-top: 40px;
     display: flex;
     justify-content: center;
     align-items: center;
     position: relative;
     img {
          width: 400px;
          height: 550px;
     }
     div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          cursor: pointer;
     }
     .seoul {
          top: 5%;
          left: 29%;
     }
     .gyeonggi {
          top: 25%;
          left: 40%;
     }
     .gangwon {
          top: 10%;
          right: 33%;
     }
     .chungchung {
          top: 35%;
          right: 33%;
     }
     .gyeongsang {
          bottom: 35%;
          right: 33%;
     }
     .jeolla {
          bottom: 20%;
          left: 32%;
     }
     .jeju {
          bottom: 0;
          left: 15%;
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
