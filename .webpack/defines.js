//
// .webpack/defines.js
//

const path = require('path');
const webpack = require('webpack');

module.exports = function(env, pkg) {
    if (typeof pkg === 'undefined') {
        pkg = 'package.json';
    }
    pkg = path.join(__dirname, '..', pkg)
    
    return {
        plugins: [
            new webpack.DefinePlugin({
                '_NAME_':        JSON.stringify(require(pkg).name),
                '_VERSION_':     JSON.stringify(require(pkg).version),
                '_ENVIRONMENT_': JSON.stringify(env),
                '_DEBUG_':       JSON.stringify(env) === 'dev' ? false : true
            })
        ]
    };
};
