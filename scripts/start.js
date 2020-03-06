'use strict';

process.env.ROLLUP_WATCH = true;
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});

const rollup = require('rollup');
const choosePort = require('choose-port');
const rollupConfig = require('../configs/rollup.config');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

let initializing = false;

choosePort(PORT, HOST, portValid => {
  const watcher = rollup.watch(
    rollupConfig(false, { port: portValid, host: HOST })
  );

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
});
