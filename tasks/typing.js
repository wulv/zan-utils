import gulp from 'gulp';
import { createProject } from 'gulp-typescript';

gulp.task('typing', () => {
  const tsProject = createProject('tsconfig.json', {
    module: process.env.target,
    removeComments: true,
  });
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.dts.pipe(gulp.dest('dist'));
});
