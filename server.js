const express = require('express');
const { getLocalRandomJoke, getExternalJoke } = require('./lib/jokes');

const app = express();

app.get('/joke', async (req, res) => {
  try {
    const local = getLocalRandomJoke();
    if (local) return res.json(local);
    const external = await getExternalJoke();
    res.json(external);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch joke' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
