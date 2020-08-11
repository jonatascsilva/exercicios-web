const { src, dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

function dependenciesCss() {
  const pluginsPostCss = [
    cssnano()
  ];

  return src('node_modules/font-awesome/css/font-awesome.css')
      .pipe(sourcemaps.init())
      .pipe(postcss(pluginsPostCss))
      .pipe(concat('deps.min.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(dest('build/assets/css'));
}

function dependenciesFonts() {
  return src('node_modules/font-awesome/fonts/*.*')
      .pipe(dest('build/assets/fonts'));
}

module.exports = {
  dependenciesCss,
  dependenciesFonts
};