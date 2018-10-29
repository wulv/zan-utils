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
    plugins: [],
  },
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
