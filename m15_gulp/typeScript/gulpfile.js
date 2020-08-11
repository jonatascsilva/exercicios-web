const gulp = require('gulp')
const { series } = require('gulp')
const uglify = require('gulp-uglify')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

const minificarETransformarTsEmJS = (cb) => {
    tsProject.src()                           // Não preciso informar o src pois está no tsconfig.json
        .pipe(tsProject())                    // Compila arquivo TS com a tipagem em JS
        .pipe(uglify())                       // Minifica arquivo
        .on('error', err => console.log(err)) // Trata nuâncias que podem acontecer
        .pipe(gulp.dest('build'))
    
    return cb()
}

module.exports.default = series(minificarETransformarTsEmJS)