var path = require('path');
var express = require('express');
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('../webpack.config');
var webpackMiddleware = require('webpack-dev-middleware');


var app = express();

var compiler = webpack(config);

app.use(webpackMiddleware (compiler,{
	 noInfo: true,
  publicPath: config.output.publicPath	
}));

app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
}));

app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.on('stormpath.ready', function () {
  app.listen(3000, 'localhost', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:3000');
  });
});