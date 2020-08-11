const { src, dest } = require('gulp');
const concat = require('gulp-concat');

// Diretórios
// - Apagar diretórios
const del = require('del');

// Debug
// - Permite que o browser faça o debug em arquivos minificados
// - Assim é possível identificar em que "linha" deu problema
const sourcemaps = require('gulp-sourcemaps');

// HTML
// - Minifica HTML
const htmlmin = require('gulp-htmlmin')

// JS
// - Minifica JS
const uglifyjs = require('gulp-uglify');
// - Insere retrocompatibildade com browsers antigos (que não suportam ESNext)
const babel = require('gulp-babel');

// CSS
// - Compila SASS para CSS
const sass = require('gulp-sass');
// - Realiza diversas operações em arquivos CSS de uma só vez
const postcss = require('gulp-postcss');
// - Adiciona vendor prefixes (com base na lista browserlist no package.json)
const autoprefixer = require('autoprefixer');
// - Minifica CSS, remove comentários, duplicidades, etc.
const cssnano = require('cssnano');

/* Tasks */

function cleanDir() {
  return del(['build/**/*']);
}

function appHtml() {
  return src('src/**/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(dest('build'));
}

function appCss(cb) {
  const pluginsPostCss = [
    autoprefixer({
      cascade: false
    }),
    cssnano({
      preset: ['default', {
        discardComments: true
      }]
    })
  ];

  return src('src/assets/sass/index.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.init())
      .pipe(postcss(pluginsPostCss))
      .pipe(concat('app.min.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(dest('build/assets/css'));
}

function appJs(cb) {
  const babelPreset = {
      presets: ['@babel/preset-env']
  };

  return src('src/assets/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel(babelPreset))
      .pipe(uglifyjs())
      .pipe(concat('app.min.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(dest('build/assets/js'));
}

function appImg(cb) {
  return src('src/assets/imgs/**/*.*')
      .pipe(dest('build/assets/imgs'));
}

module.exports = {
  cleanDir,
  appHtml,
  appCss,
  appJs,
  appImg
};