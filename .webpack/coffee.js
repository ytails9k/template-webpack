//
// .webpack/coffee.js
//

module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.coffee$/,
                    use: [ 'babel-loader', 'coffee-loader' ]
                }
            ]
        }
    };
};
