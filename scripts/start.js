'use strict';

process.env.ROLLUP_WATCH = true;

process.on('unhandledRejection', err => {
  throw err;
});
const rollup = require('rollup');
const rollupConfig = require('../configs/rollup.config');

const watcher = rollup.watch(rollupConfig(false));

let initializing = false;

watcher.on('event', event => {
  switch (event.code) {
    case 'BUNDLE_START':
      if (!initializing) {
        console.log('Initializing application...');
      } else {
        console.log('Reinitializing application...');
      }
      initializing = true;
      break;
    case 'BUNDLE_END':
      console.log('Initialized application');
      break;
    case 'ERROR':
      console.log(event.error.Error);
      break;
    default:
      break;
  }
});
