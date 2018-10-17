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
      ["@babel/env",{
        modules: 'commonjs'
      }]
    ],
    plugins: []
  },

  // publish config
  branch: 'publish/cjs',
  packageRewrite: {
    name: 'zan-utils-cjs',
    main: './index.js',
    typings: './index.d.ts',
    scripts: {},
    devDependencies: {},
  }
};
