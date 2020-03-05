'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const rollup = require('rollup');
const rollupConfig = require('../configs/rollup.config');

const watcher = await rollup.watch(rollupConfig);

watcher.on('event', event => {
  console.log(event);
});

console.log('START');
