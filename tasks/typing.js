import gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import config from '../config';
import dtsExport from './plugins/dts-export';

gulp.task('typing', () => {
  const tsProject = createProject('tsconfig.json', config.dtsTsconfig);
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.dts.pipe(dtsExport()).pipe(gulp.dest(config.dist));
});
