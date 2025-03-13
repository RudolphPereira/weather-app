import React from "react";
import "./Title.css";

function Title({ title, desc }) {
  return (
    <div className="titleBox">
      <h3 className="recentPlaceBox__title">{title}</h3>
      {desc && <p className="recentPlaceBox__desc">{desc}</p>}
    </div>
  );
}

export default Title;
