let webpack = require("webpack");
let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
const alias = {
    "@node_modules": path.resolve("./node_modules"),
    "@lib": path.resolve("./src/lib"),
    "@component": path.resolve("./src/components"),
    "@container": path.resolve("./src/containers"),
    "@reducer": path.resolve("./src/reducers"),
    "@action": path.resolve("./src/actions"),
    "@store": path.resolve("./src/store"),
    "@layout": path.resolve("./src/layout"),
    "@common": path.resolve("./src/common"),
    "@util": path.resolve("./src/util")
};

if (process.env.NODE_ENV !== "production") {
    module.exports = {
        entry: {
            app: ["./src/app.js"],
            vendor: ["react", "bluebird"]
        },
        output: {
            filename: "[name].bundle.js",
            path: "./build"
        },
        devServer: {
            proxy: {
                '/api/*': {
                    target: 'http://localhost:9000',
                    secure: false
                }
            }
        },
        module: {
            loaders: [
                {
                    test: /\.js$/, exclude: path.resolve(__dirname, "node_modules"),
                    loader: "babel",
                    query: {
                        presets: ["es2015", "react", "stage-0", "react-hmre"],
                        plugins: ["transform-decorators-legacy", "transform-object-assign"]
                    }
                },
                {test: /\.css$/, loader: ExtractTextPlugin.extract(`css-loader?-url`)},
                {
                    test: /\.less$/, exclude: path.resolve(__dirname, "node_modules"),
                    loader: ExtractTextPlugin.extract(`css-loader?-url!less-loader`)
                }
            ]
        },
        resolve: {
            alias: alias
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
            new ExtractTextPlugin("[name].bundle.css"),
            new webpack.SourceMapDevToolPlugin({})
        ]
    };
} else {
    module.exports = {
        entry: {
            app: ["./src/app.js"],
            vendor: ["react", "bluebird"]
        },
        output: {
            filename: "[name].bundle.js",
            path: "./build"
        },
        module: {
            loaders: [
                {
                    test: /\.(jpg|jpeg|png)$/, loader: "file",
                    query: {
                        name: "./img/[name].[ext]"
                    }
                },
                {
                    test: /\.js$/, exclude: path.resolve(__dirname, "node_modules"),
                    loader: "babel",
                    query: {
                        presets: ["es2015", "react", "stage-0"],
                        plugins: ["transform-decorators-legacy", "transform-object-assign"]
                    }
                },
                {test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader")}, // disable url handle
                {
                    test: /\.less$/, exclude: path.resolve(__dirname, "node_modules"),
                    loader: ExtractTextPlugin.extract("css-loader!postcss-loader!less-loader")
                }
            ]
        },
        postcss: ()=>({
            defaults: [autoprefixer],
            cleaner: [autoprefixer({browsers: ['last 2 version']})]
        }),
        resolve: {
            alias: alias
        },
        plugins: [
            new webpack.NormalModuleReplacementPlugin(/\.(jpg|jpeg|png)$/, function (option) {
                option.context = __dirname;     // 查找/img下的图片, 而不是less源文件的所在路径
                return option;
            }),
            new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
            new ExtractTextPlugin("[name].bundle.css"),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})
        ]
    };
}
