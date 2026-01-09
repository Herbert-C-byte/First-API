#!/usr/bin/env node
const { getLocalRandomJoke, getExternalJoke } = require('../lib/jokes');

(async () => {
  try {
    const local = getLocalRandomJoke();
    const joke = local || (await getExternalJoke());
    if (joke) {
      console.log(joke.setup);
      console.log(joke.punchline);
    } else {
      console.error('No joke available');
    }
  } catch (err) {
    console.error('Error:', err && err.message ? err.message : err);
    process.exitCode = 1;
  }
})();
