'use strict';

const svelte = require('rollup-plugin-svelte');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const livereload = require('rollup-plugin-livereload');
const { terser } = require('rollup-plugin-terser');
const serve = require('rollup-plugin-serve');

const createConfig = production => ({
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
    !production &&
      serve({
        open: true,
        verbose: true,
        contentBase: 'public',
        host: 'localhost',
        port: 5000
      }),
    !production && livereload('public'),
    production && terser()
  ],
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  watch: {
    clearScreen: false
  }
});

module.exports = createConfig;
