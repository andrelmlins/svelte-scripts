'use strict';

const printLog = string => {
  console.log('\x1b[36mSvelte Scripts:', '\x1b[0m', string);
};

module.exports = printLog;
