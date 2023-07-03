import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <div className="element"></div>
        <ul>
          <li>list 1</li>
          <li>list 2</li>
        </ul>
      </div>
      <ul>
        <li>list 1.1</li>
        <li>list 1.2</li>
      </ul>
      <div className="wrapper">Sono un elemento in max width</div>
    </>
  );
}

export default App;
