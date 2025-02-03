import React, { useState } from "react";
import "./Home-Screen.css";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiHumidity, WiStrongWind} from "react-icons/wi"; 
import Lottie from "lottie-react";
import clearSkyAnimation from "./animations/Clear.json";
import rainAnimation from "./animations/Rain.json";
import cloudyAnimation from "./animations/Cloudy.json";
import snowAnimation from "./animations/Snow.json";
import thunderAnimation from "./animations/Thunder.json";

const weatherIcons = {
  Clear: <WiDaySunny size={50} />,
  Clouds: <WiCloud size={50} />,
  Rain: <WiRain size={50} />,
  Snow: <WiSnow size={50} />,
  Thunderstorm: <WiThunderstorm size={50} />,
};

const weatherAnimations = {
  Clear: clearSkyAnimation,
  Clouds: cloudyAnimation,
  Rain: rainAnimation,
  Snow: snowAnimation,
  Thunderstorm: thunderAnimation,
};

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
    <div className="home-container">
    {/* Animated Weather Background */}
    {weather && (
      <Lottie
        animationData={weatherAnimations[weather.weather[0].main] || clearSkyAnimation}
        className="weather-animation"
      />
    )}

    <div>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Quick Weather Lookup</h1>
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
        <section className="weather-cards">
          <div className="weather-card">
            <h2 className="city-name">
              {weather.name}, <span className="country-code">{weather.sys.country}</span>
            </h2>
            <div className="weather-icon">
              {weatherIcons[weather.weather[0].main] || <WiCloud size={60} />}
            </div>
            <p className="temp">{weather.main.temp}°C</p>
            <p className="description">{weather.weather[0].description}</p>

            <div className="extra-info">
              <p><WiHumidity size={30} /> Humidity: {weather.main.humidity}%</p>
              <p><WiStrongWind size={30} /> Wind Speed: {weather.wind.speed} m/s</p>
              <p>Feels Like: {weather.main.feels_like}°C</p>
            </div>
          </div>
        </section>
      )}
    </div>
    </div>
  );
};

export default Home;
