import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import config from '../config';

gulp.task('publish', () => {
  return gulp.src([config.dist, 'package.json', 'README.md']).pipe(
    ghPages({
      branch: 'publish/test',
    }),
  );
});
