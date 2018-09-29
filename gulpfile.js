const gulp = require("gulp");
const ts = require("gulp-typescript");
const Esdoc = require("esdoc").default;
const esdocConfig = require('./.esdoc.json');

gulp.task('doc', function() {
  Esdoc.generate(esdocConfig);
});

gulp.task('typing', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    removeComments: true,
  });
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.dts.pipe(gulp.dest('typing'));
})

gulp.task('build:es', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'esnext'
  });
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('lib/es'));
});

gulp.task('build:umd', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'umd'
  });
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('lib/umd'));
});

gulp.task('build:commonjs', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'commonjs'
  });
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('lib/cjs'));
});

gulp.task('build', ['build:es', 'build:umd', 'build:commonjs']);

gulp.task('default', ['build', 'doc', 'typing']);