'use strict';

const rollup = require('rollup');
const child_process = require('child_process');
const svelte = require('rollup-plugin-svelte');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const livereload = require('rollup-plugin-livereload');
const { terser } = require('rollup-plugin-terser');

const production = !process.env.ROLLUP_WATCH;

let running_dev_server = false;
const writeBundle = () => {
  if (!running_dev_server) {
    running_dev_server = true;
    child_process.spawn('npm', ['run', 'start:dev'], {
      stdio: ['ignore', 'inherit', 'inherit'],
      shell: true
    });
  }
};

module.exports = {
  inputOptions: {
    input: 'src/main.js',
    plugins: [
      svelte({
        dev: !production,
        css: css => css.write('public/bundle.css')
      }),
      resolve({
        browser: true,
        dedupe: importee =>
          importee === 'svelte' || importee.startsWith('svelte/')
      }),
      commonjs(),
      !production && writeBundle,
      !production && livereload('public'),
      production && terser()
    ]
  },
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  watch: {
    clearScreen: false
  }
};
