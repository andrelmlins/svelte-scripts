'use strict';

const fs = require('fs');
const svelte = require('rollup-plugin-svelte');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const packageJson = JSON.parse(fs.readFileSync('./package.json'));

const createConfig = () => [
  {
    input: 'src/lib/index.svelte',
    output: { file: packageJson.main, format: 'umd', name: packageJson.name },
    plugins: [svelte(), resolve(), commonjs()]
  },
  {
    input: 'src/lib/index.svelte',
    output: { file: packageJson.module, format: 'es' },
    external: ['svelte/internal'],
    plugins: [svelte(), commonjs()]
  }
];

module.exports = createConfig;
