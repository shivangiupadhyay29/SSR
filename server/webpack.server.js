const path = require('path');

module.exports = {
    //bundle for node js not browser running env default it runs as browser platform
    target: 'node',

    //exclude express to avoid critical dependencies
    // externals: ['express'],

    //entry file
    entry: './src/index.js',

    //where to put output file in the code
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build'),
    },


    //run babel for every file
    module:{
        rules:[ 
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] }} ]
                    ]
                }
            }
        ]
    }
}