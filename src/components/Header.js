import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <li>
            <Link to="/">WatchList</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/add" className="btn btn-main">
                 Add-Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}