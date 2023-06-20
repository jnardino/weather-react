import React from "react";

export default function Header() {
  return (
    <header>
      <div className="row">
        <div className="col-10 search">
          <form className="input-group">
            <button
              className="btn btn-outline-secondary location-icon"
              type="button"
            >
              <i className="fa-solid fa-location-dot"></i>
            </button>
            <input
              type="text"
              className="form-control search-bar"
              placeholder="Enter a city..."
            />
            <button
              className="btn btn-outline-secondary search-icon"
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="col-2 temperature-unit">
          <button
            className="btn btn-outline-secondary temperature-unit-icon"
            type="button"
          >
            °F
          </button>
        </div>
      </div>
      <h1>Vancouver - Canada</h1>
    </header>
  );
}