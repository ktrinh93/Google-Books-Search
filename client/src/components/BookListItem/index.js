import React, { Component } from "react";
import "./style.css";

export function BookListItem(props) {

  return (
    <div className="bookDiv">
      {/* <div className="bookImg">
        <img src={props.thumb} />
      </div> */}
      <div className="bookInfo">
        <p>{`Title: ${props.title}`}</p>
        <p>{`Author(s): ${props.authors}`}</p>
        <p>{`Description: ${props.description || "No description provided"}`}</p>
      </div>
    </div>
  );

}

export default BookListItem;