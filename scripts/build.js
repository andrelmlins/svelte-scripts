'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

console.log('BUILD');
