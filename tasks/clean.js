import gulp from 'gulp';
import del from 'del';
import config from '../config';

gulp.task('clean', () => {
  return del([config.esTemp, config.dist, config.publishCache, config.esdoc.destination]);
});
