import React from "react";
import { useContext } from "react";
import WeatherContent from "../../components/WeatherContent/WeatherContent";
import FullpageError from "../../components/Error/FullpageError";
import { WeatherContext } from "../../components/WeatherContext/WeatherContext";
import "./Home.css";

function Home({ className }) {
  // Context States
  const { value1, value2, value3, value4 } = useContext(WeatherContext);

  const [weatherData, setWeatherData] = value1;
  const [userError, setUserError] = value2;
  const [userErrorMsg, setUserErrorMsg] = value3;
  const [isLoading, setIsLoading] = value4;

  return (
    <>
      {!userError && !isLoading && (
        <WeatherContent weatherData={weatherData} className={className} />
      )}
      {userError && <FullpageError errorMsg={userErrorMsg} />}
    </>
  );
}

export default Home;
