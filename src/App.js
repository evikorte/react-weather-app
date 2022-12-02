import "./App.css";
import Weather from "./Weather";
import image from "./abstract.jpg";

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <Weather defaultCity="Budapest" />
      </div>
      <footer className="text-center">
        Coded by
        <a
          href="https://github.com/evikorte/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          evikorte
        </a>
      </footer>{" "}
    </div>
  );
}
