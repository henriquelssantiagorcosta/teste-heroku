const express = require('express');

const app = express();

app.use(express.static('./dist/teste-heroku/'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/teste-heroku/'}),
);

app.listen(process.env.PORT || 8080);
