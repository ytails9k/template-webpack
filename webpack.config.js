//
// webpack.config.js
//

const _WEBPACK_PATH_ = './.webpack/';
const _PACKAGE_PATH_ = "./"
 
const {merge} = require('webpack-merge');
const coffee = require(_WEBPACK_PATH_ + 'coffee');
const defines = require(_WEBPACK_PATH_ + 'defines');
const entry = require(_WEBPACK_PATH_ + 'entry');
const html = require(_WEBPACK_PATH_ + 'html');
const output = require(_WEBPACK_PATH_ + 'output');
const provide = require(_WEBPACK_PATH_ + 'provide');
const sass = require(_WEBPACK_PATH_ + 'sass');
const target = require(_WEBPACK_PATH_ + 'target');
const uglify = require(_WEBPACK_PATH_ + 'uglify');
 
const config = function(minify) {
    return merge([
        coffee(),
        entry('index', _PACKAGE_PATH_ + 'src/index.coffee'),
        html('My Package', _PACKAGE_PATH_ + 'src/index.html.ejs'),
        output(_PACKAGE_PATH_ + 'dist/'),
        provide(),
        sass(minify),
        uglify(minify)
    ]);
};
 
module.exports = function(env) {
    switch (env) {
        case 'dist':
            return merge([
                config(true),
                defines(env, _PACKAGE_PATH_ + 'package.json'),
                target('web', 'production')
            ]);
        case 'dev':
            return merge([
                config(false),
                defines(env, _PACKAGE_PATH_ + 'package.json'),
                target('web', 'development')
            ]);
    }
};