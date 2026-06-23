const { getJoke } = require('../lib/jokes');

test('local joke has setup and punchline', async () => {
  const j = await getJoke({ source: 'local' });
  expect(j).toBeTruthy();
  expect(j).toHaveProperty('setup');
  expect(j).toHaveProperty('punchline');
});

test('fallback returns a joke from local or external source', async () => {
  const j = await getJoke({});
  expect(j).toBeTruthy();
  expect(j).toHaveProperty('setup');
  expect(j).toHaveProperty('punchline');
});
