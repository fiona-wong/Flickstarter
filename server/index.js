'use strict';
const app = require('./app');
const db = require('../db');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`FlickStarter listening on port ${port}!`);
});
