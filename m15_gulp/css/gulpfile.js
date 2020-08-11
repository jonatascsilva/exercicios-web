const gulp = require('gulp')
const { series, parallel } = require('gulp')
const sass = require('gulp-sass')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoSassEmCss(callback) {
    gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))    // Converte SCSS em CSS
        .pipe(uglifyCss({ 'uglifyComments': true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))

    return callback()
}

function copiarHtml(callback) {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'))

    return callback()
}

module.exports.default = parallel(transformacaoSassEmCss, copiarHtml)