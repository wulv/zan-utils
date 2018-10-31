import gulp from 'gulp';
import connect from 'gulp-connect';
import config from '../config';

function server() {
  return connect.server({
    ...config.env.connect,
    root: config.esdoc.destination,
  });
}

function livereload() {
  return gulp.watch(config.base.dist, () => gulp.src(config.base.dist).pipe(connect.reload()));
}

function watch() {
  return gulp.watch(config.base.src, gulp.series('build', 'typing', 'doc'));
}

gulp.task('dev', gulp.series('default', gulp.parallel(server, watch, livereload)));
