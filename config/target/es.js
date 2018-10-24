module.exports = {
  // build config
  jsTsconfig: {
    module: 'esnext',
  },
  dtsTsconfig: {
    module: 'esnext',
    removeComments: true,
  },
  dtsPlugins: [],
  babel: false,

  // publish config
  branch: 'publish/es',
  packageRewrite: {
    name: 'zan-utils-es',
    main: './index.js',
    typings: './index.d.ts',
    scripts: {},
    devDependencies: {},
  }
};
