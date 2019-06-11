import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import "./style.css";

export function BookListItemSaved(props) {

  return (
    <div className="bookDiv">
      <div className="bookInfo">
        <p>{`Title: ${props.title}`}</p>
        <p>{`Author(s): ${props.authors}`}</p>
        <p>{`Description: ${props.description || "No description provided"}`}</p>
        <a className="btn btn-dark" href={props.link} target="_blank">View</a>
        <DeleteBtn {...props} />
      </div>
    </div>
  );

}

export default BookListItemSaved;