# Svelte Scripts

[![npm version](https://badge.fury.io/js/svelte-scripts.svg)](https://www.npmjs.com/package/svelte-scripts) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-scripts/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-scripts.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-scripts) &bull; [![Dependencies](https://david-dm.org/andrelmlins/svelte-scripts.svg)](https://david-dm.org/andrelmlins/svelte-scripts)

- Create svelte applications with zero settings.
- Configurations and scripts for svelte applications.
- Works on the most used operating systems.

## Basic Use

```
npx degit andrelmlins/svelte-scripts/template svelte-app
cd svelte-app
yarn start
```

Then open http://localhost:5000/ to see your app.

## Scripts

### Start the development application

Using [rollup](https://rollupjs.org/) with reference to folder `src`.

```
npm start
// OR
yarn start
```

### Build the application

Using [rollup](https://rollupjs.org/) with reference to folder `src`.

```
npm build
// OR
yarn build
```

### Test the project

Using [jest](https://jestjs.io/) with reference to folder `src`. Is possible edit the test config in `package.json`.

```
npm test
// OR
yarn test
```

## Philosophy

1. Zero settings
2. Only dependency to start a project
3. Quickly launch a svelte application

## Contribution guidelines

If you want to contribute to **Svelte Scripts**, be sure to review the
[contribution guidelines](CONTRIBUTING.md). This project adheres to
[code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to
uphold this code.

## License

Svelte Scripts is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-scripts/blob/master/LICENSE).
