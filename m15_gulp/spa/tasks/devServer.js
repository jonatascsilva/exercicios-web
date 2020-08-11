const { src } = require('gulp');
const webserver = require('gulp-webserver');

function devServer() {
  return src('build')
      .pipe(webserver({
        port: 8080,
        open: true,
        livereload: true
      }))
}

module.exports = {
  devServer
};