var webpack = require('webpack');
module.exports = {
  entry: './ts/index.tsx',
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  // Add minification
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}