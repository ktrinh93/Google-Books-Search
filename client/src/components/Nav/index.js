import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Google Books</a>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
