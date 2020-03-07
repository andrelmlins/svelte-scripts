'use strict';

const svelte = require('rollup-plugin-svelte');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const createConfig = () => [
  {
    input: 'src/lib/index.svelte',
    output: { file: pkg.main, format: 'umd', name: 'Library' },
    plugins: [svelte(), resolve(), commonjs()]
  },
  {
    input: 'src/lib/index.svelte',
    output: { file: pkg.module, format: 'es' },
    external: ['svelte/internal'],
    plugins: [svelte(), commonjs()]
  }
];

module.exports = createConfig;
