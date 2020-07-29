const path = require('path');
const merge = require('webpack-merge');
const baseConfig   = require('./webpack.base');
// const webpackNodeExternals = require('webpack-node-externals');

const config = {
    target: 'web',
    name: 'client',

    entry:'./src/client/client.js',

    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    }
}

module.exports = merge(baseConfig,config);