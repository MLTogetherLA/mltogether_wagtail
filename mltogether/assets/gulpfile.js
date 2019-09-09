const { src, dest, parallel}= require('gulp');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const minify = require('gulp-minify');


var paths = {
    scss: './scss/*.scss',
    js: './js/*.js'
};

function css() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'compact',
            precision: 10
        })
        .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(dest('../static/css'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('../static/css'))
}

function js() {
    return src(paths.js, { sourcemaps: true})
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(dest('../static/js', { sourcemaps: true }))
}

exports.css = css;
exports.js = js;
exports.default = parallel(css, js);