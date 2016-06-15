var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: './public', //config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});

// server = new WebpackDevServer(webpack(config), {
//   contentBase: contentBase,
//   publicPath: config.output.publicPath,
//   hot: true
// });
//
// server.app.use(function pushStateHook(req, res, next) {
//   var ext = path.extname(req.url);
//   if ((ext === '' || ext === '.html') && req.url !== '/') {
//     req.pipe(request(localURL)).pipe(res);
//   } else {
//     next();
//   }
// });


// var express = require('express');
//
// // Create our app
// var app = express();
//
// app.use(express.static('public'));
//
// app.listen(3000, function () {
//   console.log('Express server is up on port 3000');
// });


