'use strict';

process.env.ROLLUP_WATCH = true;
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});

const rollup = require('rollup');
const choosePort = require('choose-port');
const rollupConfig = require('../configs/rollup.config');

const PORT = process.env.PORT || 6001;
const HOST = process.env.HOST || 'localhost';
const PORT_LIVE_RELOAD = process.env.PORT_LIVE_RELOAD || 35279;

let initializing = false;

choosePort(PORT, HOST, portServeValid => {
  choosePort(PORT_LIVE_RELOAD, HOST, portLiveReloadValid => {
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
});
