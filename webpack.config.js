import * as path from "path"
import webpack from 'webpack'
import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APP_DIR = path.join(__dirname, 'src')
const BUILD_DIR = path.join(__dirname, 'public')

export default {
    devServer: {
        hot: true,
        port: 3000,
        static: path.join(__dirname, 'public'),
    },
    devtool: 'inline-source-map',
    entry: {
        app: {
            dependOn: "vendor",
            import: APP_DIR + '/index.tsx'
        },
        vendor: [
            '@reduxjs/toolkit',
            'react',
            'react-dom',
            'react-redux',
            'redux',
        ],
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                include: APP_DIR,
                test: /\.(js|jsx|ts|tsx)$/,
                use: [{ loader: 'babel-loader' }],
            },
        ],
    },
    output: {
        filename: '[name].prod.js',
        path: BUILD_DIR,
    },
    plugins: [
        new webpack.DefinePlugin({
            mode: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            title: "PetLab FE Test.com"
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        modules: ['node_modules'],
    },
}
