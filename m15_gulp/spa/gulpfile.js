const { parallel, series, watch } = require('gulp')

const { cleanDir, appHtml, appCss, appJs, appImg } = require('./tasks/app');
const { dependenciesCss, dependenciesFonts } = require('./tasks/dependecies');
const { devServer } = require('./tasks/devServer');

function watchFiles(cb) {
  const srcDestination = 'src'
  
  watch(`${srcDestination}/**/*.html`, appHtml);
  watch(`${srcDestination}/**/*.scss`, appCss);
  watch(`${srcDestination}/**/*.js`, appJs);
  watch(`${srcDestination}/assets/imgs/*.*`, appImg);

  return cb();
}

exports.default = series(
  cleanDir,
  parallel(
    series(appHtml, appCss, appJs, appImg),
    series(dependenciesCss, dependenciesFonts)
  ),
  devServer,
  watchFiles
);