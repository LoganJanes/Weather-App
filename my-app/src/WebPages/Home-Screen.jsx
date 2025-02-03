import React, { useState } from "react";
import "./Home-Screen.css";

const Home = () => {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) {
      setMessage("Please enter a city name.");
    } else {
      setMessage(""); // For error message handling.
      console.log(`City: ${city}`); // Will Replace with API.
    }
  };

  return (
    <div>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Quick Lookup Weather App</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoFocus
            />
            <button type="submit">SUBMIT</button>
            <span className="msg">{message}</span>
          </form>
        </div>
      </section>
      <section className="ajax-section">
        <div className="container">
          <ul className="cities"></ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
