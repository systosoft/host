import React from "react";
import ReactDOM from "react-dom";
import Counter from "remote/Counter"
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: remote1</div>
    <div>Framework: react</div>
  <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
