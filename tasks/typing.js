import gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import config from '../config';
import pipes from './tools/pipes';

gulp.task('typing', () => {
  const tsProject = createProject(config.dts.tsconfigFile, config.dts.tsconfig);
  const tsResult = tsProject.src().pipe(tsProject());
  return pipes(tsResult.dts, config.dts.plugins).pipe(gulp.dest(config.dist))
});
