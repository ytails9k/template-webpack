//
// .webpack/sass.js
//

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const css = function() {
    return {
        loader: 'css-loader',
        options: {
            url: false
        }
    };
};

const postcss = function(minify) {
    if (minify) {
        return {
            loader: 'postcss-loader',
            options: {
                plugins: function () {
                    return [
                        require('precss'),
                        require('autoprefixer'),
                        require('cssnano')({
                            preset: ['default', {
                                discardComments: {
                                    removeAll: true,
                                },
                            }]
                        })
                    ];
                }
            }
        };
    } else {
        return {
            loader: 'postcss-loader',
            options: {
                plugins: function () {
                    return [
                        require('precss'),
                        require('autoprefixer')
                    ];
                }
            }
        };
    }
};

module.exports = function(minify) {
    return {
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                         MiniCssExtractPlugin.loader,
                         css(),
                         postcss(minify),
                         {
                             loader: 'sass-loader'
                         }
                    ],
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css"
            })
        ]
    };
};
