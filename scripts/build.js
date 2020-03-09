'use strict';

process.env.ROLLUP_WATCH = false;
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

const rollup = require('rollup');
const rollupConfigLibrary = require('../configs/rollup-lib.config');
const rollupConfigApp = require('../configs/rollup.config');
const printLog = require('../utils/printLog');

let config;

if (process.env.SVELTE_SCRIPTS === 'app') {
  config = rollupConfigApp(true);
} else {
  config = rollupConfigLibrary();
}

const build = async () => {
  printLog('Building application...\n\n');

  const bundle = await rollup.rollup(config);

  await bundle.write(config.output);

  printLog('Built application...\n\n');
};

build();
