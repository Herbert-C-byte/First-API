const url = 'http://localhost:3000/joke';

(async () => {
  try {
    if (typeof fetch === 'function') {
      const res = await fetch(url);
      const json = await res.json();
      console.log(JSON.stringify(json, null, 2));
      return;
    }

    const http = require('http');
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          console.log(JSON.stringify(JSON.parse(data), null, 2));
        } catch (e) {
          console.log(data);
        }
      });
    }).on('error', (err) => {
      console.error('Request error:', err.message || err);
      process.exitCode = 1;
    });
  } catch (err) {
    console.error('Error fetching joke:', err && err.message ? err.message : err);
    process.exitCode = 1;
  }
})();
