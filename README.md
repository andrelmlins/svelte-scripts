# Svelte Scripts

[![npm version](https://badge.fury.io/js/svelte-scripts.svg)](https://www.npmjs.com/package/svelte-scripts) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-scripts/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-scripts.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-scripts) &bull; [![Dependencies](https://david-dm.org/andrelmlins/svelte-scripts.svg)](https://david-dm.org/andrelmlins/svelte-scripts)

- Create svelte applications and libraries with zero settings.
- Configurations and scripts for svelte applications.
- Works on the most used operating systems.

## Basic Use

### From Application

Create your svelte application

```
npx degit andrelmlins/svelte-scripts/template svelte-app
cd svelte-app
yarn start
```

Then open http://localhost:5000/ to see your app.

### From Library

Create your svelte library

```
npx degit andrelmlins/svelte-scripts/template-library svelte-library
cd svelte-library
yarn start
```

Then open http://localhost:5000/ to see your library.

## Scripts

### Start the development application

Using [rollup](https://rollupjs.org/) with reference to folder `src`.
Used in applications and libraries.

```
npm start
// OR
yarn start
```

### Build the application

Using [rollup](https://rollupjs.org/) with reference to folder `src`.
Used in applications and libraries.

```
npm build
// OR
yarn build
```

### Test the project

Using [jest](https://jestjs.io/) with reference to folder `src`. Is possible edit the test config in `package.json`. Used in applications and libraries.

```
npm test
// OR
yarn test
```

## Philosophy

1. Zero settings
2. Only dependency to start a project
3. Quickly launch a svelte application

## Environment Variables

Some environment variables are available.

| Variable         | Type   | Default Value |
| ---------------- | ------ | ------------- |
| PORT             | number | 5000          |
| HOST             | string | localhost     |
| PORT_LIVE_RELOAD | number | 35729         |

## Contribution guidelines

If you want to contribute to **Svelte Scripts**, be sure to review the
[contribution guidelines](CONTRIBUTING.md). This project adheres to
[code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to
uphold this code.

## License

Svelte Scripts is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-scripts/blob/master/LICENSE).
