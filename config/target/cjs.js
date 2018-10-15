module.exports = {
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
  branch: 'publish/cjs',
};
