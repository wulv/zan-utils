import gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import babel from 'gulp-babel';
import gulpIf from 'gulp-if';
import newer from 'gulp-newer';
import config from '../config';

gulp.task('build', () => {
  const tsProject = createProject(config.target.js.tsconfigFile, config.target.js.tsconfig);
  const tsResult = tsProject.src()
    .pipe(
      gulpIf(!config.env.prod, newer({
        dest: config.base.dist,
        ext: '.js',
      })),
    )
    .pipe(tsProject());
  return tsResult.js
    .pipe(gulp.dest(config.base.esTemp))
    .pipe(gulpIf(config.target.babel, babel(config.target.babel)))
    .pipe(gulp.dest(config.base.dist));
});
