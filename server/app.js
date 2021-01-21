const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// socket.io connections
io.on('connection', socket => {
  // ready 2 listen for things here!
  // socket is key.... 
  //     - id at `socket.id`
  //     - listen for stuff `socket.on('event-name', callback);`
});

http.listen(5000, function() {
  console.log(`app is listening on port ${this.address().port} `);
})