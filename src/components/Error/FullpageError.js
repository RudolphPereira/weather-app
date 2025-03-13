import React from "react";
import "../Error/FullpageError.css";

function FullpageError({ errorMsg }) {
  return (
    <div className="error">
      <div className="errorBox">
        <p className="errorMsg">{errorMsg}</p>
        <span>Kinldy refresh the page to proceed</span>
      </div>
    </div>
  );
}

export default FullpageError;
