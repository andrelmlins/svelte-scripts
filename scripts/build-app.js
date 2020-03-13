'use strict';

process.env.ROLLUP_WATCH = false;
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

const rollup = require('rollup');
const rollupConfigApp = require('../configs/rollup.config');
const printLog = require('../utils/printLog');

const build = async () => {
  printLog('Building application...');

  const bundle = await rollup.rollup(rollupConfigApp(true), {
    input: 'src/dev/main.js'
  });

  await bundle.write(config.output);

  printLog('Built application...');
};

build();
