import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import pic from "./pic.jpg";

export default function Header(props) {
  const title = props.title || "Your title";
  const searchbar = props.searchbar !== undefined ? props.searchbar : false;

  let imageStyle = {
    height: "60px",
    width: "60px",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand" style={{ color: "white" }}>
        <img
          src={pic}
          alt="Logo"
          className="rounded-circle shadow"
          style={imageStyle}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">
              About
            </Link>
          </li>
        </ul>

        {/* Search bar or fallback text */}
        {searchbar ? (
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        ) : (
          <p style={{ color: "white" }}>No search bar</p>
        )}
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool,
};

Header.defaultProps = {
  title: "Your title",
  searchbar: true,
};
