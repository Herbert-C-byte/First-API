const fs = require('fs');
const path = require('path');

async function getExternalJoke() {
  try {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    return await res.json();
  } catch (err) {
    throw err;
  }
}

function getLocalJokes() {
  const p = path.join(__dirname, '..', 'jokes.json');
  try {
    const raw = fs.readFileSync(p, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

function getLocalRandomJoke() {
  const arr = getLocalJokes();
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

async function getJoke(options = {}) {
  const source = String(options.source || 'fallback').toLowerCase();
  if (source === 'local') {
    return getLocalRandomJoke();
  }

  if (source === 'external') {
    return getExternalJoke();
  }

  const local = getLocalRandomJoke();
  return local || getExternalJoke();
}

module.exports = { getExternalJoke, getLocalRandomJoke, getJoke };
