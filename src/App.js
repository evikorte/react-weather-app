import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
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
