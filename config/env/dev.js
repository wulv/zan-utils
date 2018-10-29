module.exports = {
  prod: false,
  connect: {
    port: parseInt(process.env.PORT) || 8001,
    host: '127.0.0.1',
    debug: false,
    livereload: true,
  }
};
