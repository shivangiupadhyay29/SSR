const path = require('path');
const merge = require('webpack-merge');
const baseConfig   = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    //bundle for node js not browser running env default it runs as browser platform
    target: 'node',
    name: 'server',

    //exclude express to avoid critical dependencies
    // externals: ['express'],

    //entry file
    entry: './src/index.js',

    //where to put output file in the code
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build'),
    },

    externals:[webpackNodeExternals()]

}

module.exports = merge(baseConfig,config);