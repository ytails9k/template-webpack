//
// .webpack/output.js
//

const path = require('path');
 
module.exports = function(dir) {
    return {
        output: {
            path: path.join(__dirname, '..', dir),
            filename: '[name].js'
        },
    };
};
