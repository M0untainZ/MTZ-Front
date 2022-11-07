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
        // geolocation에서 error를 받아왔을 경우 error 출력
        // 사용자 위치 값을 받아왔을 경우 아래 코드 실행
        
        if (location) {
          const weather_KEY = `${WEATHER_API_KEY}`;
          // user key는 직접 받아와서 사용하십시오.
          const weatherData = async () => {
              await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${weather_KEY}&units=metric`
              )
              // 위도, 경도, userKey를 넣어서 get 요청을하면 각종 정보를 보내준다.
              .then((response) => {
                console.log(response)
                setCity(response.data.name);
                setWeather(response.data.weather[0].icon);
                // 그냥 weather를 요청하면 날씨를 글자로 보내주고 icon을 붙이면 날씨에 맞는 이미지 url을 보내준다.
                setTemp(`${response.data.main.temp}°C`);
              })
              .catch(() => {
                alert("Local navigation failed.");
                // 실패했을 경우
                // 사실 여기서 실패는 위치 찾는 것에 실패한 게 아니라 적절한 문구는 아니다. 알아서 수정하십시오.
              });
          } 
          weatherData();
        }
      }, [location]);
      // 단 한 번만 실행되며 location이 변경될 때만 재실행

    return (
        <StWeatherContainer>
            <StWeatherInfo>
                <img src={`http://openweathermap.org/img/wn/${weather}.png`}></img>
                <p className="weather-info">{city} {temp}</p>
            </StWeatherInfo>
            <StMension>
                {
                    (weather === "01n" || "02n" || "03n" || "04n" ) ? 
                    <p>야간 산행은 위험해요 !</p> : <p>등산가기 좋은날이에요</p>
                }
            </StMension>
        </StWeatherContainer>
    );
}

export default Weather;

const StWeatherContainer = styled.div`
    width: 50%;
    height: 100px;
    border: 1px solid gray;
    margin:10px auto;
`;

const StWeatherInfo = styled.div`
    display: flex;
    img {
            width: 30px;
            height: 30px;
        }
`;

const StMension = styled.div`

`;