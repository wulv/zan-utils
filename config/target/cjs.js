const dtsExport = require('../plugins/dts-export');

module.exports = {
  // build config
  js: {
    tsconfigFile: 'tsconfig.build.json',
    tsconfig: {
      module: 'esnext',
    },
  },
  dts: {
    tsconfigFile: 'tsconfig.build.json',
    tsconfig: {
      module: 'esnext',
      removeComments: true,
    },
    plugins: [dtsExport()],
  },
  babel: {
    presets: [
      ['@babel/env',{
        modules: 'commonjs'
      }]
    ],
    plugins: [
      ['add-module-exports', {
        addDefaultProperty: true
      }]
    ]
  },

  // publish config
  branch: 'publish/cjs',
  packageRewrite: {
    main: './index.js',
    typings: './index.d.ts',
    scripts: {},
    devDependencies: {},
  }
};
