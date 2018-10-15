import gulp from 'gulp';
import config from '../config';

function watch() {
  gulp.watch(config.src, gulp.series('build', 'typing', 'doc'));
}

gulp.task('dev', gulp.series('default', watch));
