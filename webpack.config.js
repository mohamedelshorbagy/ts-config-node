const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonWebpack = require('nodemon-webpack-plugin');



module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.join(__dirname , 'dist'),
        filename: 'app.bundle.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts' , '.tsx' , '.js']
    },
    plugins: [
        new NodemonWebpack()
    ]
}
