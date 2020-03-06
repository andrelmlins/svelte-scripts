'use strict';

process.env.ROLLUP_WATCH = true;
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});

const rollup = require('rollup');
const choosePort = require('choose-port');
const rollupConfig = require('../configs/rollup.config');
const printLog = require('../utils/printLog');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';
const HOST_LIVE_RELOAD = process.env.HOST_LIVE_RELOAD || '0.0.0.0';
const PORT_LIVE_RELOAD = process.env.PORT_LIVE_RELOAD || 35729;

let initializing = false;

choosePort(PORT, HOST, portServeValid => {
  choosePort(PORT_LIVE_RELOAD, HOST_LIVE_RELOAD, portLiveReloadValid => {
    const watcher = rollup.watch(
      rollupConfig(false, {
        portServe: portServeValid,
        host: HOST,
        portLiveReload: portLiveReloadValid
      })
    );

    watcher.on('event', event => {
      switch (event.code) {
        case 'BUNDLE_START':
          if (!initializing) {
            printLog('Initializing application...');
          } else {
            printLog('Reinitializing application...');
          }
          initializing = true;
          break;
        case 'BUNDLE_END':
          printLog('Initialized application');
          break;
        case 'ERROR':
          console.log(event.error.Error);
          break;
        default:
          break;
      }
    });
  });
});
