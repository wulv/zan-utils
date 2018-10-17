import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import merge from 'merge2';
import jsonEditor from 'gulp-json-editor';
import config from '../config';

function publishGit() {
  return merge(
    gulp.src('package.json').pipe(jsonEditor((json) => {
      return Object.assign({}, json, config.packageRewrite)
    })),
    gulp.src([config.dist + '/**', ...config.static]),
  ).pipe(
    ghPages({
      branch: config.branch,
      cacheDir: config.publishCache,
      push: false,
    }),
  );
}

gulp.task('publish', gulp.series('default', publishGit));
