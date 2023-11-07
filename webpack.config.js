const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');




module.exports = {
    entry: {
        'app': './src/index.js',
        'assets/js/banner': './src/assets/js/banner.js',
        'assets/js/tabs': './src/assets/js/tabs',
        'assets/js/upload': './src/assets/js/upload',
        'assets/js/chart': './src/assets/js/chart',
    },
    output: {
        path: path.join(__dirname, 'app'),
        filename: '[name].js'

    },
    devServer: {
        static: path.join(__dirname, 'app'),
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        devMiddleware: {
            writeToDisk: true,
        },
    },
    mode: 'development',  // Set mode to 'development'
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|)$/,
                type: 'asset/resource',
                exclude: /fonts/,
                generator: {
                    filename: 'assets/images/[name][ext]',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
            },
        ]
    },
    optimization: {
        minimize: false,  // Set to false for development
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['app', 'assets/js/banner', 'assets/js/chart', 'assets/js/tabs',],
        }),

        new HtmlWebpackPlugin({
            filename: 'add-product.html',
            template: './src/add-product.html',
            chunks: ['app', 'assets/js/upload'],
        }),

        new HtmlWebpackPlugin({
            filename: 'products.html',
            template: './src/products.html',
            chunks: ['app'],
        }),

        new HtmlWebpackPlugin({
            filename: 'orders.html',
            template: './src/orders.html',
            chunks: ['app'],
        }),

        new HtmlWebpackPlugin({
            filename: 'users.html',
            template: './src/users.html',
            chunks: ['app'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/button.html',
            template: './src/components/button.html',
            chunks: ['app'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/textfield.html',
            template: './src/components/textfield.html',
            chunks: ['app'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/card.html',
            template: './src/components/card.html',
            chunks: ['app'],
        }),
        new HtmlWebpackPlugin({
            filename: 'components/list.html',
            template: './src/components/list.html',
            chunks: ['app'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/help.html',
            template: './src/components/help.html',
            chunks: ['app'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/summary.html',
            template: './src/components/summary.html',
            chunks: ['app'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/action.html',
            template: './src/components/action.html',
            chunks: ['app'],
        }),
        new HtmlWebpackPlugin({
            filename: 'components/sidebar.html',
            template: './src/components/sidebar.html',
            chunks: ['app'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/table.html',
            template: './src/components/table.html',
            chunks: ['app'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/chart.html',
            template: './src/components/chart.html',
            chunks: ['app', 'assets/js/chart'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/tabs.html',
            template: './src/components/tabs.html',
            chunks: ['app', 'assets/js/tabs'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/banner.html',
            template: './src/components/banner.html',
            chunks: ['app', 'assets/js/banner'],
        }),

        new HtmlWebpackPlugin({
            filename: 'components/upload.html',
            template: './src/components/upload.html',
            chunks: ['app', 'assets/js/upload'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/help.html'),
            location: "help",
            template_filename: ['index.html', 'add-product.html', 'products.html' , 'users.html' , 'orders.html'],
        }),

        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/banner.html'),
            location: "banner",
            template_filename: ['index.html'],
        }),

        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/chart.html'),
            location: "chart",
            template_filename: ['index.html'],
        }),

        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/sidebar.html'),
            location: "sidebar",
            template_filename: ['index.html', 'add-product.html' , 'products.html', 'users.html', 'orders.html'],
        }),
        

    ]
}
