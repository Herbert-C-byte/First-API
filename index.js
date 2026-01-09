const { getExternalJoke } = require('./lib/jokes');

async function jokeAPI() {
  try {
    const joke = await getExternalJoke();
    console.log('Setup: ', joke.setup);
    console.log('Punchline: ', joke.punchline);
  } catch (error) {
    console.log('Something went wrong:', error);
  }
}

if (require.main === module) {
  jokeAPI().then(() => console.log('This is after the jokeAPI call.'));
}

module.exports = { jokeAPI };