import React, { useContext } from "react";
import "./SideNav.css";
import logo from "../../assets/logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router";
import { WeatherContext } from "../WeatherContext/WeatherContext";

function SideNav() {
  // Context States
  const { value1 } = useContext(WeatherContext);
  const [weatherData, setWeatherData] = value1;

  return (
    <section className="sideNav">
      <div className="sideNavBox">
        <Link to="/">
          <div className="logoBox">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <Link to="/">
          <div className="currentLocationBox">
            <div className="flagBox">
              <img
                src={`https://flagsapi.com/${weatherData.country}/flat/24.png`}
                alt="flag"
              />
            </div>
            <div className="locationBox">
              <span>Current Location</span>
              <p>
                <i>{weatherData.country ? weatherData.country : "country"}</i> -
                {weatherData.city ? weatherData.city : "city"}
              </p>
            </div>
          </div>
        </Link>

        <div className="searchBox">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}

export default SideNav;
