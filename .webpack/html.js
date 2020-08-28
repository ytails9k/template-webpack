//
// .webpack/html.js
//

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = function(title, file) {
    return {
        plugins: [
            new HtmlWebpackPlugin({
                title: title,
                template: path.join(__dirname, '..', file)
            })
        ]
    };
}
