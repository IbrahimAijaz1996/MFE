const {merge} = require("webpack-merge");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new moduleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./MarketingIndex": "./src/test",
            },
            shared: packageJSON.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);