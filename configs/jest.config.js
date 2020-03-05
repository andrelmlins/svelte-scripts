'use strict';

const jestConfig = {
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['js', 'svelte'],
  transform: {
    '^.+\\.js$': `${__dirname}/jest/babelTransform.js`,
    '^.+\\.svelte$': 'svelte-jester'
  }
};

module.exports = jestConfig;
