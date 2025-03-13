import React from "react";
import "./RecentPlace.css";

function RecentPlace({ className, image, temp, title, desc }) {
  return (
    <div className={`recentPlaceBox ${className}`}>
      <div className="recentPlaceBox__content">
        {image && (
          <div className="imgBox">
            <img className="imgBox__img" src={image} alt="background_image" />
          </div>
        )}

        <div className="infoBox">
          <div className="infoBox__top">
            <p className="infoBox__top--title">{title}</p>
          </div>
          <div className="infoBox__center">
            <p className="infoBox__center--title">{temp}</p>
          </div>
          {desc && (
            <div className="infoBox__bottom">
              <p className="infoBox__bottom--title">{desc}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentPlace;
