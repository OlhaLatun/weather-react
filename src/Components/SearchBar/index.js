import React from "react";

export default function SearchBar({ getCity }) {
  function handleSubmit(e) {
    e.preventDefault();
    getCity(e.target.firstChild.value);
  }

  return <SearchBarContainer onSubmit={handleSubmit} />;
}

function SearchBarContainer({ onSubmit }) {
  return (
    <div className="search-bar">
      <div className="logo">
        Olha<span>Weather</span>
      </div>
      <div className="search">
        <form id="form" onSubmit={onSubmit}>
          <input id="search" type="text" placeholder="Enter city name" />
          <button>search</button>
        </form>
      </div>
    </div>
  );
}
