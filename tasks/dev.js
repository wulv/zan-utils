import gulp from 'gulp';
import config from '../config';

gulp.task('dev', () => {
  gulp.watch(config.src, gulp.series('build', 'typing', 'doc'));
});
