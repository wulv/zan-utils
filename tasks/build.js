import gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import babel from 'gulp-babel';
import gulpIf from 'gulp-if';
import newer from 'gulp-newer';
import config from '../config';

gulp.task('build', () => {
  const tsProject = createProject('tsconfig.json', config.js.tsconfig);
  const tsResult = tsProject.src()
    .pipe(
      gulpIf(config.dev, newer({
        dest: config.dist,
        ext: '.js',
      })),
    )
    .pipe(tsProject());
  return tsResult.js
    .pipe(gulp.dest(config.esTemp))
    .pipe(gulpIf(config.babel, babel(config.babel)))
    .pipe(gulp.dest(config.dist));
});
