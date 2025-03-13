import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import searchIcon from "../../assets/search.svg";
import axios from "axios";
import { weatherAPIKey } from "../../utils/utils";
import Result from "../Result/Result";
import ShortError from "../Error/ShortError";

function SearchForm() {
  const [cityList, setCityList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const cityValue = e.target.value;
    setSearchValue(cityValue.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check existing city
    const existingCity = cityList.find((item) => {
      const cityName = item.city.toLowerCase();
      return cityName === searchValue ? true : false;
    });

    if (!existingCity) {
      try {
        setError(false);
        setIsLoading(true);
        const { data } = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${weatherAPIKey}`
        );

        setCityList([
          ...cityList,
          {
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
          },
        ]);

        setSearchValue("");
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setErrorMsg(error.message);
        setSearchValue("");
        setIsLoading(false);
      }
    } else {
      setError(true);
      setErrorMsg("City currently exists");
      setSearchValue("");
      setIsLoading(false);
    }
  };

  const handleRemove = (city) => {
    const filteredList = cityList.filter((element) => element.city !== city);
    setCityList(filteredList);
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }, [error]);

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <label className="iconBox" htmlFor="search">
          <img src={searchIcon} alt="search" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search for a location"
          onChange={handleChange}
          value={searchValue}
        />
      </form>

      <ul className="resultBox">
        {error && (
          <li>
            <div className="shortErrorBox">
              <ShortError errMsg={errorMsg} />
            </div>
          </li>
        )}

        {cityList.map((data) => (
          <li key={data.city}>
            <Result
              country={data.country}
              city={data.city}
              temp={Math.round(data.temp)}
              flag={data.flag}
              handleRemove={handleRemove}
            />
          </li>
        ))}
        {isLoading && (
          <li>
            <div className="loadingResult">loading..</div>
          </li>
        )}
      </ul>
    </>
  );
}

export default SearchForm;
