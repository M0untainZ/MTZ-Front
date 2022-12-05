import { useState, useEffect } from "react";

const MountGeolocation = (options = {}) => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();
  console.log(location, "위치");
  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;
    setLocation({
      latitude,
      longitude,
    });
  };
  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options
    );
  }, [options]);
  return { location, error };
};
const positionOptions = {
  maximumAge: 0,
  timeout: 5000,
  enableHighAccuracy: true,
};

export { MountGeolocation, positionOptions };
