'use strict';

process.env.ROLLUP_WATCH = false;
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

const rollup = require('rollup');
const rollupConfig = require('../configs/rollup.config');

const config = rollupConfig(true);

const build = async () => {
  console.log('Building application...\n\n');

  const bundle = await rollup.rollup(config);

  await bundle.write(config.output);

  console.log('Built application...\n\n');
};

build();
