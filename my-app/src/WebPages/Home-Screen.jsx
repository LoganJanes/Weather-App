import React, { useState } from "react";

const Home = () => {
  return (
    <div>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Simple Weather App</h1>
          <form>
            <input type="text" placeholder="Search for a city" autoFocus />
            <button type="submit">SUBMIT</button>
            <span className="msg"></span>
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
