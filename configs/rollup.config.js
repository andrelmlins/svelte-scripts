'use strict';

const svelte = require('rollup-plugin-svelte');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const livereload = require('rollup-plugin-livereload');
const { terser } = require('rollup-plugin-terser');
const serve = require('rollup-plugin-serve');

const createConfig = (production, options = {}) => ({
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
        host: options.host,
        port: options.portServe
      }),
    !production &&
      livereload({ watch: 'public', port: options.portLiveReload }),
    production && terser()
  ],
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  watch: {
    clearScreen: false
  }
});

module.exports = createConfig;
