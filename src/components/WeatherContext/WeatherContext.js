import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { weatherAPIKey, unsplashAPIKey } from "../../utils/utils";

const WeatherContext = createContext();

// Add body class
document.body.className = "home";

const WeatherContextProvider = ({ children }) => {
  // States
  const [weatherData, setweatherData] = useState([]);
  const [userError, setUserError] = useState(false);
  const [userErrorMsg, setUserErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get Home weather
  const getHomeWeather = async (lat, long) => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${weatherAPIKey}`
      );

      const imageData = await axios(
        `https://api.unsplash.com/search/photos?query=${data.name}&orientation=landscape&per_page=1&client_id=${unsplashAPIKey}`
      );

      console.log(imageData);

      // Set Weather data
      setweatherData({
        desc: data.weather[0].description,
        temp: data.main.temp,
        city: data.name,
        feelsLike: data.main.feels_like,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        country: data.sys.country,
        visibility: data.visibility,
        wind: data.wind.speed,
        clouds: data.clouds.all,
        humidity: data.main.humidity,
        bgImage: imageData.data.results[0].urls.full,
      });

      setIsLoading(false);
      setUserError(false);
    } catch (error) {
      setUserError(true);
      setUserErrorMsg(error);
      setIsLoading(false);
    }
  };

  // Get geolocation
  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
      setUserError(false);
    } else {
      setUserError(true);
      setUserErrorMsg("Geolocation is not supported by this browser");
    }
  };

  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    getHomeWeather(latitude, longitude);
  };

  const showError = (error) => {
    setUserError(true);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setUserErrorMsg("User denied the request for Geolocation");
        break;
      case error.POSITION_UNAVAILABLE:
        setUserErrorMsg("Location information is unavailable");
        break;
      case error.TIMEOUT:
        setUserErrorMsg("The request to get user location timed out");
        break;
      case error.UNKNOWN_ERROR:
        setUserErrorMsg("An unknown error occurred");
        break;
      default:
        setUserErrorMsg("An unknown error occurred");
    }
  };

  useEffect(() => {
    getGeoLocation();
  }, []);

  useEffect(() => {
    if (userError) {
      setTimeout(() => {
        document.body.className = "errorLoaded";
      }, 300);
    }
  }, [userError]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        document.body.className = "home loading";
      }, 100);
    } else if (!isLoading && weatherData.length !== 0) {
      setTimeout(() => {
        document.body.remove.className = "home loading";
        document.body.className = "home loaded";
      }, 800);
    }
  }, [isLoading]);

  return (
    <WeatherContext.Provider
      value={{
        value1: [weatherData, setweatherData],
        value2: [userError, setUserError],
        value3: [userErrorMsg, setUserErrorMsg],
        value4: [isLoading, setIsLoading],
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
