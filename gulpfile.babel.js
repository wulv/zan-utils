import gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import babel from 'gulp-babel';
import del from 'del';
import ghPages from 'gulp-gh-pages';
import Esdoc from 'esdoc';
import esdocConfig from './esdoc.json';
import sequence from 'gulp-sequence';

const buildTarget = process.env.target || 'esnext';

gulp.task('doc', ['build'], () => {
  return Esdoc.generate(esdocConfig);
});

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('typing', () => {
  const tsProject = createProject('tsconfig.json', {
    module: buildTarget,
    removeComments: true,
  });
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.dts.pipe(gulp.dest('dist'));
});

gulp.task('build', () => {
  const tsProject = createProject('tsconfig.json', {
    module: buildTarget,
  });
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('publish', () => {
  return gulp.src(['./dist/**/*', 'package.json', 'README.md']).pipe(ghPages({
    branch: 'publish/test',
  }));
})

gulp.task('default', sequence('clean', 'build', 'typing', 'doc'));
