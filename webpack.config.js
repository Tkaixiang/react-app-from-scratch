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
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // specify which extensions webpack will resolve. (import without adding the extension)
    resolve: { extensions: ["*", ".js", ".jsx"] },
    // where to save the output files to
    output: {
        path: path.resolve(__dirname, "build/"), // ABSOLUTE path of output files on your local computer
        publicPath: "/build/", // adds this path in front of all URLs encountered in the code (i.e where your webpack assets are stored)
        filename: "bundle.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public/")
        },
        port: 3000,
        devMiddleware: {
            publicPath: "http://localhost:3000/build/"
        },
        hot: "only"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()] // Enable HMR (refresh on change)
};
