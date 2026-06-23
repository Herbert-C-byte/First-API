const express = require('express');
const { getJoke } = require('./lib/jokes');

const app = express();

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to Random Joke API', endpoints: ['/joke'] });
});

app.get('/joke', async (req, res) => {
  try {
    const source = req.query.source;
    const joke = await getJoke({ source });
    if (!joke) {
      return res.status(404).json({ error: 'No joke found' });
    }
    res.json({ source: source || 'fallback', joke });
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch joke' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
