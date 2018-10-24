import gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import config from '../config';
import pipes from './tools/pipes';

gulp.task('typing', () => {
  const tsProject = createProject('tsconfig.json', config.dtsTsconfig);
  const tsResult = tsProject.src().pipe(tsProject());
  return pipes(tsResult.dts, config.dtsPlugins).pipe(gulp.dest(config.dist))
});
