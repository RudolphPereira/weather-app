import React from "react";
import "./Result.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

function Result({ city, country, temp, handleRemove }) {
  return (
    <>
      <Link to={`/city/${city}`}>
        <div className="result">
          <div className="resultContent">
            <div className="leftBox">
              <div className="flagbox">
                <img
                  src={`https://flagsapi.com/${country}/flat/24.png`}
                  alt="flag"
                />
              </div>
              <div className="cityBox">
                <p className="countryShort">{country}</p>
                <p className="cityFull">{city}</p>
              </div>
            </div>

            <div className="rightBox">
              <div className="tempBox">
                <p className="temp">{temp + "°C"}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="deleleBox">
        <button
          type="button"
          className="deleteBtn"
          onClick={() => {
            handleRemove(city);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </>
  );
}

export default Result;
