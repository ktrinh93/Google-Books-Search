import React, { Component } from "react";
import SaveBtn from "../SaveBtn";
import "./style.css";

export function BookListItemSearch(props) {

  return (
    <div className="bookDiv">
      <div className="bookInfo">
        <p>{`Title: ${props.title}`}</p>
        <p>{`Author(s): ${props.authors}`}</p>
        <p>{`Description: ${props.description || "No description provided"}`}</p>
        <a className="btn btn-dark" href={props.link} target="_blank">View</a>
        <SaveBtn {...props}/>
      </div>
    </div>
  );

}

export default BookListItemSearch;