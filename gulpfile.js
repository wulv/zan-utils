const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const dts = require('dts-generator').default;
const Esdoc = require("esdoc").default;
const esdocConfig = require('./.esdoc.json');

gulp.task('definitions', function(done) {
  dts({
    name: 'zan-utils',
    project: './',
    baseDir: 'src/',
    resolveModuleId: (params) => {
      return params.currentModuleId.replace(/^src/, 'zan-utils/lib')
    },
    out: 'typing/index.d.ts'
  }).then(done);
});

gulp.task('esdoc', function() {
  Esdoc.generate(esdocConfig);
});

gulp.task('build', function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("lib"));
});

gulp.task('default', ['build', 'definitions', 'esdoc']);