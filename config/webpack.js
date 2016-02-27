'use strict';

var base = {
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }],
        exprContextRecursive: true,
        exprContextRegExp: /^\.\/(?!main)([a-zA-Z0-9\-\_\/]*)$/,
        exprContextCritical: false,
        exprContextRequest: '../../../src/js',

        unknownContextRegExp: /$^/,
        unknownContextCritical: false
    }
};

module.exports = {
    src: {
        entry: './src/js/main.js',
        output: {
            filename: 'main.js'
        },
        resolve: {
            root: __dirname + '/src/js'
        },
        module: base.module
    },
    test: {
        entry: './test/all-specs.js',
        output: {
            filename: 'all-specs.js'
        },
        resolve: {
            root: __dirname + '/test'
        },
        module: base.module
    }
}
