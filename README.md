# random-joke

Tiny CLI and HTTP API that returns a random joke.

Install

```bash
npm install
```

Run the HTTP server

```bash
npm start
# then open http://localhost:3000/joke
```

Available endpoints

```bash
http://localhost:3000/
http://localhost:3000/joke
http://localhost:3000/joke?source=local
http://localhost:3000/joke?source=external
```

Run the CLI (after `npm install`)

```bash
npx joke
npx joke --local
npx joke --external
```

Run tests

```bash
npm test
```
