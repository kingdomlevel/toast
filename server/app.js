const express = require('express');
const app = express();
const http = require('http').Server(app);

http.listen(5000, function() {
  console.log(`app is listening on port ${this.address().port} `);
})