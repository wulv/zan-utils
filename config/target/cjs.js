module.exports = {
  // build config
  jsTsconfig: {
    module: 'esnext',
  },
  dtsTsconfig: {
    module: 'esnext',
    removeComments: true,
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
