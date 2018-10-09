import gulp from 'gulp';
import requireDir from 'require-dir';

// fix process env
if (!process.env.target) {
  process.env.target = 'esnext';
}

requireDir('./tasks');

gulp.task('default', gulp.series('clean', 'build', 'typing', 'doc'));
