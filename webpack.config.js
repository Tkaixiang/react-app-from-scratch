const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js", // The "entry-point" for webpack to process
    mode: "development", // Working in dev mode (so that server later on will be in dev mode)
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                // ^^ match against .js and .jsx files
                loader: "babel-loader", // use babel-loader to transform ES6+ code to old JS
                options: { presets: ["@babel/env"] },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpeg|jpg|gif|webp|svg)$/,
                type: 'asset/resource',
                generator: {
                    publicPath: "images/",
                    outputPath: "images/",
                }
            }

        ]
    },
    // specify which extensions webpack will resolve. (import without adding the extension)
    resolve: { extensions: ["*", ".js", ".jsx"] },
    // where to save the output files to
    output: {
        path: path.resolve(__dirname, "build/"), // ABSOLUTE path of webpack output files on your local computer
        publicPath: "", // adds this path in front of all URLs encountered in the code (i.e where your webpack assets are stored)
        filename: "js/[name].js", // output files to "js" directory
        clean: true // clears the "build" folder before building
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build/")
        },
        port: 3000,
        devMiddleware: {
            publicPath: "http://localhost:3000/build/"
        },
        hot: "only"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR (refresh on change)
        new HtmlWebpackPlugin({ // Creates a HTML file with the paths to the various assets/bundles/modules injected into the script header
            filename: "index.html",
            template: "public/index.html", // Template HTML to inject into
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
          }),
        new CssMinimizerPlugin()
    ] 
};
