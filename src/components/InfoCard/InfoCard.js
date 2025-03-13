import React from "react";
import "./InfoCard.css";
import Title from "../Title/Title";

function InfoCard({ icon, titleDesc, title, cardDesc }) {
  return (
    <div className="infoCard">
      <div className="infoCard__top">
        <img src={icon} alt="icon" className="infoCard__icon" />
      </div>
      <div className="infoCard__center">
        <Title title={title} desc={titleDesc} />
      </div>
      <div className="infoCard__bottom">
        <p className="infoCard__desc">{cardDesc}</p>
      </div>
    </div>
  );
}

export default InfoCard;
