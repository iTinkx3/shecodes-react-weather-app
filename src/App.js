import React from "react";
import Weather from "./Weather";


import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by <a href="https://magenta-khapse-6f3ded.netlify.app/" target="_blank" rel="noopener noreferrer">Sam Collins</a> and is open-sourced on{" "} 
      <a href="https://github.com/iTinkx3/shecodes-weather-app" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
      </div>
      </div>
  );
}
