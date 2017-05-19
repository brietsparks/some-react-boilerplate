// @flow
import React from "react";
import ReactDOM from "react-dom";

// import * as Hello from "./components/HelloClass";

import Hello from './components/Hello';
const hello = <Hello firstName="Briet" lastName="Sparks" />;

ReactDOM.render(
  hello,
  document.getElementById("app")
);