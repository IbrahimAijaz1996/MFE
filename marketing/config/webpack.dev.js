const {merge} = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json")

const devConfig = {
    mode: "development",
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: "index.html",
        },
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new moduleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./MarketingIndex": "./src/test",
            },
            shared: packageJSON.dependencies,
        })
    ],
};

module.exports = merge(commonConfig, devConfig);