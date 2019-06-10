import React from "react";
import "./style.css";

export function ResultsDiv(props) {

  return (
    <div className="resultsDiv">
      <h5>Results</h5>
      {props.children}
    </div>
  );

}

export default ResultsDiv;