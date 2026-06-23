#!/usr/bin/env node
const { getJoke } = require('../lib/jokes');

(async () => {
  try {
    const sourceArg = process.argv[2];
    const options = {};
    if (sourceArg === '--local') options.source = 'local';
    if (sourceArg === '--external') options.source = 'external';

    const joke = await getJoke(options);
    if (joke) {
      console.log(joke.setup);
      console.log(joke.punchline);
    } else {
      console.error('No joke available');
      process.exitCode = 1;
    }
  } catch (err) {
    console.error('Error:', err && err.message ? err.message : err);
    process.exitCode = 1;
  }
})();
