import React from "react";
import ReactDOM from "react-dom";
import {Counter} from './components/Counter'
import "./index.css";
import { Test } from "./components/Test";

const App = () => (
  <div className="container">
    <div>Name: counter</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Test></Test>
    <Counter></Counter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
