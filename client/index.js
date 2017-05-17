import React from "react";
import ReactDOM from "react-dom";

import * as Hello from "./components/HelloClass";
const hello = <Hello firstName="Briet" lastName="Sparks" />;

// import Hello from './components/Hello';

ReactDOM.render(
  hello,
  document.getElementById("app")
);