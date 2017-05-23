require('babel-register') ({
  presets: ['react', 'es2015']
});

const express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var AppComponent = require('../client/components/App').default;

app.use(express.static('public'));

app.get('/', (req, res) => {
  // const html = ReactDOMServer.renderToString(<AppComponent/>);
  const html = ReactDOMServer.renderToString(
    React.createElement(AppComponent)
  );
  res.send(html);
});

var PORT = 3000;

app.listen(PORT, function() {
  console.log('http://localhost:' + PORT)
});