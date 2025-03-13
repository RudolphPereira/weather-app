import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { weatherAPIKey, unsplashAPIKey } from "../../utils/utils";
import WeatherContent from "../../components/WeatherContent/WeatherContent";
import ShortError from "../../components/Error/ShortError";
import "./City.css";

function City({ className }) {
  // Params
  const { cityId } = useParams();

  // States
  const [cityWeather, setCityWeather] = useState([]);
  const [userError, setUserError] = useState(false);
  const [userErrorMsg, setUserErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getCityWeather = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&units=metric&appid=${weatherAPIKey}`
      );

      const imageData = await axios(
        `https://api.unsplash.com/search/photos?query=${data.name}&orientation=landscape&per_page=1&client_id=${unsplashAPIKey}`
      );

      setCityWeather({
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

  useEffect(() => {
    getCityWeather();
  }, [cityId]);

  useEffect(() => {
    if (userError) {
      setTimeout(() => {
        document.body.className = "pageErrorLoaded";
      }, 300);
    }
  }, [userError]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        document.body.className = "loading";
        setIsLoading(true);
      }, 0);
    } else if (!isLoading && cityWeather.length !== 0) {
      setTimeout(() => {
        document.body.remove.className = "loading";
        document.body.className = "loaded";
        setIsLoading(false);
      }, 600);
    }
  }, [isLoading]);

  return (
    <>
      {!userError && (
        <WeatherContent weatherData={cityWeather} className={className} />
      )}
      {userError && (
        <div className="pageErrorBox">
          <ShortError errorMsg={userErrorMsg} />
        </div>
      )}
    </>
  );
}

export default City;
