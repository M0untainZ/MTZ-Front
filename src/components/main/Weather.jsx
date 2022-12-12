import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Mapmodal from "./modal/Mapmodal";
import { useDispatch } from "react-redux";
import { regionData } from "../../redux/modules/mountainsSlice";
import Snow from "../../elements/Snow";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Weather = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [weather, setWeather] = useState("");
  const [modal, setModal] = useState(false);
  const GEOCODING_KEY = process.env.REACT_APP_GOOGLE_API;
  const WEATHER_KEY = process.env.REACT_APP_WEATHER_API;

  const onModalOpen = () => {
    setModal(!modal);
  };

  const onGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        sessionStorage.setItem("status", 1)
      }, () => {sessionStorage.setItem("status", 3)})
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      const geo_key = `${GEOCODING_KEY}`;
      const weather_key = `${WEATHER_KEY}`;
      const weatherData = () => {
        axios
          .all([
            axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${geo_key}`
            ),
            axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weather_key}&units=metric`
            ),
          ])
          .then(
            axios.spread((res1, res2) => {
              const geo_res = res1.data;
              const weather_res = res2.data;
              sessionStorage.setItem("city", geo_res.plus_code.compound_code.substring(13))
              setWeather(weather_res.weather[0].icon);
              sessionStorage.setItem("temp", Math.floor(weather_res.main.temp))
            })
          )
          .catch(() => {
            toast.error("요청에 실패하였습니다", {
              autoClose: 1500,
              position: toast.POSITION.TOP_CENTER
            })
          });
      };
      weatherData();
    }
  }, [latitude && longitude])

  return (
    <>
      <StMainImageBanner>
        <img alt="" src="/icons/mainbanner.webp" />
        <StMap onClick={onModalOpen}>
          <img alt="" src="/icons/map_search.png" />
          <span>지도보기</span>
        </StMap>
        {modal && (
          <Mapmodal
            open={modal}
            onClose={() => {
              setModal(false);
            }}
          >
            <StMapContainer>
              <img alt="" src="/icons/main_map.webp" />
              <div
                className="region seoul"
                onClick={() => {
                  dispatch(regionData("서울"));
                  navigate("/detail");
                  setModal(false);
                }}
              >
                <p>서울</p>
                <span>5</span>
              </div>
              <div
                className="region gangwon"
                onClick={() => {
                  dispatch(regionData("강원"));
                  navigate("/detail");
                  setModal(false);
                }}
              >
                <p>강원</p>
                <span>5</span>
              </div>
              <div
                className="region gyeonggi"
                onClick={() => {
                  dispatch(regionData("경기"));
                  navigate("/detail");
                  setModal(false);
                }}
              >
                <p>경기</p>
                <span>12</span>
              </div>
              <div
                className="region gyeongsang"
                onClick={() => {
                  dispatch(regionData("경상"));
                  navigate("/detail");
                  setModal(false);
                }}
              >
                <p>경상</p>
                <span>5</span>
              </div>
              <div
                className="region chungchung"
                onClick={() => {
                  dispatch(regionData("충청"));
                  navigate("/detail");
                  setModal(false);
                }}
              >
                <p>충청</p>
                <span>4</span>
              </div>
              <div
                className="region jeolla"
                onClick={() => {
                  dispatch(regionData("전라"));
                  navigate("/detail");
                  setModal(false);
                }}
              >
                <p>전라</p>
                <span>4</span>
              </div>
              <div
                className="region jeju"
                onClick={() => {
                  dispatch(regionData("제주"));
                  navigate("/detail");
                  setModal(false);
                }}
              >
                <p>제주</p>
                <span>1</span>
              </div>
            </StMapContainer>
          </Mapmodal>
        )}
        <StWeatherContainer>
          {sessionStorage.getItem("status") === null &&
            <div className="geo-btn">
              <span>현재 날씨가 궁금하다면</span>
              <button onClick={onGetLocation}>날씨보기</button>
            </div>
          }
          {sessionStorage.getItem("status") === "3" &&
            <div className="not">
              <span>날씨 정보를 이용하시려면 권한을 허용해 주세요 😭</span>
            </div>
          }
          {sessionStorage.getItem("status") === "1" &&
          <StWeatherInfoWrap>
            <StWeatherIcon>
              <img
                alt=""
                src={
                  (weather === "01d" && "/icons/01d.png") ||
                  (weather === "02d" && "/icons/02d.png") ||
                  ((weather === "03d" || "04d" || "03n" || "04n") &&
                    "/icons/03d.png") ||
                  ((weather === "09d" || "09n" || "10d" || "10n") &&
                    "/icons/09d.png") ||
                  ((weather === "11d" || "11n") && "/icons/11d.png") ||
                  ((weather === "13d" || "13n") && "/icons/13d.png") ||
                  ((weather === "50d" || "50n") && "/icons/50d.png")
                }
              />
            </StWeatherIcon>
            <StWeatherInfo>
              <span className="temp">{`${sessionStorage.getItem("temp")}˚C`} ㅣ</span>
              <span className="city-name">{sessionStorage.getItem("city")}</span>
              <p>오늘은 어디로 떠나볼까요?</p>
            </StWeatherInfo>
            <button className="shortcut" onClick={() => navigate("/detail")}>
              바로가기
            </button>
          </StWeatherInfoWrap>
          }
        </StWeatherContainer>
        <ToastContainer />
        <Snow className="snow" />
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
  overflow: hidden;
  z-index: 5;
  .snow {
    position: absolute;
    z-index: 0;
  }
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
  background-color: #185b6e;
  color: #ffffff;
  gap: 10px;
  z-index: 6;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
  }
`;

const StMapContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 6vh;
  img {
    width: fit-content;
    height: 550px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    background-color: transparent;
    border-radius: 50%;
    padding: 5px;
    width: 50px;
    height: 50px;
  }
  .region {
    font-size: 15px;
    :hover {
      font-size: 17px;
      font-weight: 600;
      transform: scale(1.05);
    }
  }
  .seoul {
    top: 4.3%;
    left: 23%;
  }
  .gyeonggi {
    top: 24.3%;
    left: 35.5%;
  }
  .gangwon {
    top: 10%;
    right: 27.5%;
  }
  .chungchung {
    top: 32%;
    right: 30%;
  }
  .gyeongsang {
    bottom: 34%;
    right: 28.5%;
  }
  .jeolla {
    bottom: 20%;
    left: 26.3%;
  }
  .jeju {
    bottom: -1%;
    left: 7.5%;
  }
`;

const StWeatherContainer = styled.div`
  width: 20%;
  height: 5vh;
  position: absolute;
  right: 13%;
  bottom: 10%;
  padding: 10px;
  z-index: 6;
  background-color: #e1e5e4;
  box-shadow: 0 0 3px black;
  border-radius: 5px;
  .geo-btn {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 20px;
      margin-right: 10px;
    }
    button {
      border: 2px solid gray;
      border-radius: 5px;
      width: 70px;
      height: 30px;
      cursor: pointer;
      &:hover {
        background-color: lightgray;
      }
    }
  }
  .not {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StWeatherInfoWrap = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  .shortcut {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 25px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 3px;
    right: 10px;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }
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
