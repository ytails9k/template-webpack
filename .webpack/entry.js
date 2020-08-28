//
// .webpack/entry.js
//

const path = require('path');
 
module.exports = function(entry, file) {
    var config = {};
    config ["entry"] = {};
    config ["entry"][entry] = path.join(__dirname, '..', file);
    return config ;
};
