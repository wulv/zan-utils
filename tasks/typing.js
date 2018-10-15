import gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import config from '../config';

gulp.task('typing', () => {
  const tsProject = createProject('tsconfig.json', config.dtsTsconfig);
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.dts.pipe(gulp.dest(config.dist));
});
