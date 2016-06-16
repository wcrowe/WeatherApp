var path = require('path');
var webpack = require('webpack');


const DEV = 'DEV';
const SASS_LOADERS = [
  'style',
  `css?modules${DEV ? '&localIdentName=[path]---[local]' : ''}!postcss!sass`,
];

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index'
    ],
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: './public/index.html'
    }
  },
  resolve:{
    root: __dirname,
    alias: {
    },
    extensions: ['','.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders: [{
      loaders: ['babel-loader'],
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_componenets)/
    }
      ,
      {
        test: /\.scss$/,
        loader: DEV ? SASS_LOADERS.join('!') : ExtractTextPlugin.extract.apply(null, SASS_LOADERS),
      }
    ]
  }
}

// module.exports = {
//   entry: './app/index',
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js'
//   },
//   resolve:{
//     root: __dirname,
//     alias: {
//     },
//     extensions: ['','.js', '.jsx']
//   },
//   module:{
//     loaders: [{
//       loader: 'babel-loader',
//       query:{
//         presets: ['react','es2015', 'stage-0']
//       },
//       test: /\.jsx?$/,
//       exclude: /(node_modules|bower_componenets)/
//     }]
//   }
// }