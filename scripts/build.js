'use strict';

process.env.ROLLUP_WATCH = false;

process.on('unhandledRejection', err => {
  throw err;
});

const rollup = require('rollup');
const rollupConfig = require('../configs/rollup.config');

const build = async () => {
  console.log('Building application...\n\n');

  const bundle = await rollup.rollup(rollupConfig);
  const { output } = await bundle.generate(rollupConfig.output);

  output.map(chunkOrAsset => {
    if (chunkOrAsset.type === 'asset') {
      console.log('Asset', chunkOrAsset);
    } else {
      console.log('Chunk', chunkOrAsset.modules);
    }
  });

  await bundle.write(outputOptions);

  console.log('Built application...\n\n');
};

build();
