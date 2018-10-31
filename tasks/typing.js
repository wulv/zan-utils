import gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import config from '../config';
import pipes from './tools/pipes';

gulp.task('typing', () => {
  const tsProject = createProject(config.target.dts.tsconfigFile, config.target.dts.tsconfig);
  const tsResult = tsProject.src().pipe(tsProject());
  return pipes(tsResult.dts, config.target.dts.plugins).pipe(gulp.dest(config.base.dist))
});
