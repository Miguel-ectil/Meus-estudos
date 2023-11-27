
const express = require('express')

const PORT = 3002;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST)