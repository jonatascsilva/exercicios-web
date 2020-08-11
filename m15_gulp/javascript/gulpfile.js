// Objetivos:
// - Gulp: Concatenar arquivos JavaScript da pasta src e minificá-los
// - Babel: Converter novas funcionalidades do JS para dar retrocompatiblidade
//   com browsers antigos (isso é transpile), como por exemplo: ** -> Math.pow,
//   let -> var
//   * Note que você pode escolher a versão do ES a ser trabalhada

const gulp = require('gulp')
const { series } = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

const concatenarEMinificarJS = (cb) => {
  gulp.src('src/**/*.js')
      .pipe(babel({
        comments: false,                    // Ignora commentários dos JS
        presets: ["env"]                    // Usa a última versão do ECMAScript
      }))
      .pipe(uglify())                       // Minifica arquivo
      .on('error', err => console.log(err)) // Trata nuâncias que podem acontecer
      .pipe(concat('codigo.min.js'))        // Concatena arquivos e seta nome
      .pipe(gulp.dest('build'))

  return cb()
}

module.exports.default = series(concatenarEMinificarJS)