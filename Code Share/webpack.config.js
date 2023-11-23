const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.[chunkhash].js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // the name of the html file
    }),
  ],
  devServer: {
    port: 7001, // port number for the development server
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // regular expression to identify the .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // regular expression to identify the styles files
        use: ["style-loader", "css-loader"],
      },
    //   {
    //     test: /\.(png|woff|woff2|eot|ttf|svg)$/, // regular expression to identify the to import images and fonts
    //     loader: "url-loader",
    //     options: { limit: false },
    //   },
    ],
  },
};