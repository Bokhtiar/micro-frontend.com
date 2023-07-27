import React from "react";
import ReactDOM from "react-dom";
import {Counter} from 'counter/Counter'
import { Test } from 'counter/Test'


import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: container</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
<Test></Test>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
