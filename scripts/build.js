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

let configs;

if (process.env.SVELTE_SCRIPTS === 'app') {
  configs = [rollupConfigApp(true)];
} else {
  configs = [
    ...rollupConfigLibrary(),
    rollupConfigApp(true),
    {
      input: 'src/dev/main.js'
    }
  ];
}

const build = async () => {
  printLog('Building application...');

  configs.map(async config => {
    const bundle = await rollup.rollup(config);

    await bundle.write(config.output);
  });

  printLog('Built application...');
};

build();
