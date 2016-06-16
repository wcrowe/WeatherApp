const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const parseArgs = require('minimist');

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
  sassLoader: {
    precision: 8,
  },

  postcss: [
    autoprefixer({
      browsers: [
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 9',
        'Edge >= 1',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6',
      ],
    }),
  ],

  imagemin: {
    minimize: !DEV,
    gifsicle: {
      interlaced: true,
    },
    jpegtran: {
      progressive: true,
    },
    optipng: {
      optimizationLevel: 7,
    },
    svgo: {
      plugins: [
        {
          removeTitle: true,
        },
        {
          convertPathData: false,
        },
        {
          removeViewBox: false,
        },
      ],
    },
  },
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
      },
      {
        test: /\.(gif|jpe?g|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url!img',
      },
      {
        test: /\.(woff2?|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url',
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