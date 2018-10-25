const dtsExport = require('../plugins/dts-export');

module.exports = {
  // build config
  js: {
    tsconfig: {
      module: 'esnext',
    },
  },
  dts: {
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
