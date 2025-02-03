import React, { useState } from "react";
import "./Home-Screen.css";

const Home = () => {
  const [city, setCity] = useState("");
  
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e444a438aabcb5f87d058e49b7faf2d9&units=metric`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data); // Update weather state
    } catch (error) {
      alert(error.message);
    }
  };

   return (
    <div>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Simple Weather App</h1>
          <form onSubmit={fetchWeather}>
            <input
              type="text"
              placeholder="Search for a city"
              value={city}
              onChange={(e) => setCity(e.target.value)} // Update city state
              autoFocus
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </section>
      {weather && (
        <section className="ajax-section">
          <div className="container">
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>{weather.main.temp}°C</p>
          </div>
        </section>
      )}
    </div>
  );
};
export default Home;
