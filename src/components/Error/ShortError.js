import React from "react";
import "./ShortError.css";

function ShortError({ errMsg }) {
  return (
    <div className="shortError">
      <p>{errMsg}</p>
    </div>
  );
}

export default ShortError;
