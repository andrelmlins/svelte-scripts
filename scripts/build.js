'use strict';

process.env.ROLLUP_WATCH = false;
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

const rollup = require('rollup');
const rollupConfig = require('../configs/rollup.config');
const printLog = require('../utils/printLog');

const config = rollupConfig(true);

const build = async () => {
  printLog('Building application...\n\n');

  const bundle = await rollup.rollup(config);

  await bundle.write(config.output);

  printLog('Built application...\n\n');
};

build();
