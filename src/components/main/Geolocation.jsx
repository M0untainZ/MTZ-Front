import {useState, useEffect} from "react";

const useCurrentLocation = (options = {}) => {
    // 파라미터에 옵션을 따로 넣을 수 있도록 구성
      const [location, setLocation] = useState();
      const [error, setError] = useState();
    
      const handleSuccess = (location) => {
        const { latitude, longitude } = location.coords;
        setLocation({ latitude, longitude });
      };
    // 위치를 가져오는 것에 성공하면 좌표 저장
    
      const handleError = () => {
        setError("Local navigation failed.");
      };
    // 실패시 에러 메세지 지정
    
      useEffect(() => {
        if (!navigator.geolocation) {
          setError("Geolocation is not supported.");
          return;
        }
     // geolocation을 실행하는 것 자체를 실패할 경우 에러 메세지 지정
    
        navigator.geolocation.getCurrentPosition(
          handleSuccess,
          handleError,
          options
        );
      }, [options]);
    // geolocaition 을 한 번 실행, option값이 바뀔 경우 재실행.

      return { location, error };
    };

    const positionOptions = {
        maximumAge: 0,
        timeout: 5000,
        enableHighAccuracy: true,
      };
    
    export {useCurrentLocation, positionOptions}