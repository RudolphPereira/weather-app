import React from "react";
import "./WeatherContent.css";
import RecentPlace from "../RecentPlace/RecentPlace";
import Title from "../Title/Title";
import InfoCard from "../InfoCard/InfoCard";
import Cloudy from "../../assets/cloudy.svg";
import Wind from "../../assets/wind.svg";
import Humidity from "../../assets/humidity.svg";
import Eye from "../../assets/eye.svg";
import defaultBgImage from "../../assets/bgImg.jpg";
import { observationSliderSettings } from "../../utils/sliders";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WeatherContent({ weatherData, className }) {
  return (
    <div className={`coreBox ${className}`}>
      <div className="leftBox">
        <div className="centerBox">
          <Title title="Current Forecast" />
          <RecentPlace
            className=""
            image={weatherData.bgImage ? weatherData.bgImage : defaultBgImage}
            title={weatherData.desc ? weatherData.desc : "Loading..."}
            temp={
              weatherData.temp ? Math.round(weatherData.temp) + "°C" : "0°C"
            }
            desc={
              weatherData.city
                ? weatherData.city
                : "Thank you for being patient with us!"
            }
          />
        </div>
        <div className="bottomBox">
          <Title title="Observations" />
          <Slider {...observationSliderSettings}>
            <RecentPlace
              image=""
              className="smallBox"
              title="Feels Like"
              temp={
                weatherData.feelsLike
                  ? Math.round(weatherData.feelsLike) + "°C"
                  : "0°C"
              }
            />
            <RecentPlace
              image=""
              className="smallBox"
              title="Max Temp"
              temp={
                weatherData.maxTemp
                  ? Math.round(weatherData.maxTemp) + "°C"
                  : "0°C"
              }
            />
            <RecentPlace
              image=""
              className="smallBox"
              title="Min Temp"
              temp={
                weatherData.minTemp
                  ? Math.round(weatherData.minTemp) + "°C"
                  : "0°C"
              }
            />
            <RecentPlace
              image=""
              className="smallBox"
              title="Country"
              temp={weatherData.country || "NA"}
            />

            <RecentPlace
              image=""
              className="smallBox"
              title="Clouds"
              temp={weatherData.clouds ? weatherData.clouds + "%" : "0 %"}
            />
          </Slider>
        </div>
      </div>
      <div className="rightBox">
        <InfoCard
          icon={Eye}
          title="Visibility"
          titleDesc={
            weatherData.visibility ? weatherData.visibility + " m" : "0 m"
          }
          cardDesc="The air quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure."
        />
        <InfoCard
          icon={Wind}
          title="Wind"
          titleDesc={weatherData.wind ? weatherData.wind + " km/h" : "0 km/h"}
          cardDesc="The air quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure."
        />
        <InfoCard
          icon={Cloudy}
          title="Cloudy"
          titleDesc={weatherData.clouds ? weatherData.clouds + "%" : "0 %"}
          cardDesc="The air quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure."
        />
        <InfoCard
          icon={Humidity}
          title="Humidity"
          titleDesc={weatherData.humidity ? weatherData.humidity + "%" : "0 %"}
          cardDesc="The air quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure."
        />
      </div>
    </div>
  );
}

export default WeatherContent;
