
import './App.css';
import Weather from './weather';

function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="container">
          <Weather defaultCity="Durban" />

          <footer>
            This project was coded by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zamandlovu ndlovu
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/wecodeschool/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://suspicious-beaver-111c4d.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
      );
    </div>
  );
}

export default App;
