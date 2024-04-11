import React from "react";
import "./weather.css";
import "./App.css";

export default function Weather() {
  return (
    <div className="weather-App">
      <header>
        <form id="search-formElement">
          <input
            type="search"
            placeholder="enter city"
            required
            class="search-form-Input"
            id="search-form-Input"
          />
          <input
            type="submit"
            value="search"
            class="search-form-button"
            id="search-form-button"
          />
        </form>
      </header>
      <main>
        <div className="app-Data">
          <div>
            <h1 className="city" id="city-Element"></h1>
            <br />
            <p className="details">
              <span className="day-time" id="day-time">
                ,
              </span>
              <span className="sky" id="sky">
                {" "}
                clear sky
              </span>{" "}
              <br />
              Humidity:{" "}
              <strong className="Humidity" id="Humidity">
                88%,
              </strong>{" "}
              Wind:
              <strong className="speed" id="speed">
                {" "}
                4.12km/h
              </strong>
            </p>
          </div>

          <div className="app-Temparature">
            <div id="icon-app"></div>
            <div className="weather-temp" id="weatherTemparature">
              {" "}
            </div>
            <div className="unit"> °C</div>
          </div>
        </div>

        <div className="weather-forecast" id="forecast"></div>
      </main>

      <footer>
        This project was coded by
        <a href="https://github.com/ZAMA-N">Zama N</a> and it
        <a href="https://github.com/ZAMA-N/complete-weather-project">
          open sourced on Github
        </a>
        hosted by
        <a href="https://main--sensational-peony-d8ff87.netlify.app/">
          Netilfy
        </a>
      </footer>
    </div>
  );
}
