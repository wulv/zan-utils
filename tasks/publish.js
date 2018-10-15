import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import merge from 'gulp-merge';
import jsonEditor from 'gulp-json-editor';
import config from '../config';

gulp.task('publish', () => {
  return merge(
    gulp.src('package.json').pipe(jsonEditor(config.packageRewrite)),
    gulp.src([config.dist, ...config.static]),
  ).pipe(
    ghPages({
      branch: config.branch,
    }),
  );
});
