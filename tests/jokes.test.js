const { getLocalRandomJoke } = require('../lib/jokes');

test('local joke has setup and punchline', () => {
  const j = getLocalRandomJoke();
  expect(j).toBeTruthy();
  expect(j).toHaveProperty('setup');
  expect(j).toHaveProperty('punchline');
});
