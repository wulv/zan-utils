import gulp from 'gulp';
import esdoc from 'gulp-esdoc';
import config from '../config';

gulp.task('doc', () => {
  return gulp.src(config.esTemp).pipe(esdoc(config.esdoc));
});
