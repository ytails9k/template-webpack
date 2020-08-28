//
// .webpack/uglify.js
//

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 
module.exports = function(minify) {
    if (minify) {
        return {
            plugins: [
                new UglifyJsPlugin()
            ]
        };
    } else {
        return {};
    }
}
