import React from "react";
import "./style.css";

function SearchDiv(props) {

  return (
    <div className="searchDiv">
      <h5>Book Search</h5>
      <form>
        <div className="form-group">
          <label htmlFor="bookQuery">Book</label>
          <input className="form-control" id="bookQuery" onChange={props.onChange} placeholder="Enter a book title to search for"/>
        </div>
        <button type="button" className="btn btn-dark" onClick={props.onSubmit}>Search</button>
      </form>
    </div>
  );

}

export default SearchDiv;