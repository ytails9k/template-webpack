//
// .webpack/provide.js
//
 
const webpack = require('webpack');
 
module.exports = function() {
    return {
        plugins: [
            new webpack.ProvidePlugin({
                // place defines here
            })
        ]
    };
}
