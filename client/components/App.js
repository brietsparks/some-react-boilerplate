// @flow

import React from "react";
import Hello from './Hello';

export default class App extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>SSR App</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div>
            <Hello firstName="Briet" lastName="Sparks" />
            <button onClick={this._handleClick}>Ok</button>
          </div>
          <script src="/bundle.js" />
        </body>
      </html>
    );
  }

  _handleClick() {
    alert('ok');
  }
}