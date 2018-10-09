import gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import babel from 'gulp-babel';

gulp.task('build', () => {
  const tsProject = createProject('tsconfig.json', {
    module: process.env.target,
  });
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('es_temp')).pipe(babel()).pipe(gulp.dest('dist'));
});
