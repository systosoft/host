import React from "react";
import ReactDOM from "react-dom";
import Logincontainer from "./Logincontainer";
import "./index.scss";

const App = () => (
  <React.Fragment>
    <Logincontainer/>
  </React.Fragment>
);
ReactDOM.render(<App />, document.getElementById("app"));
