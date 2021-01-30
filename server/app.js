const express = require('express');
const connectDb  = require('./utils/connectDb');
// const connect = require('./utils/connectDb');
const app = express();
const http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

connectDb().then(() => {
  // socket.io connections
  io.on('connection', socket => {
    // ready 2 listen for things here!
    // socket is key.... 
    //     - id at `socket.id`
    //     - listen for stuff `socket.on('event-name', callback);`
  });
});


http.listen(5000, function() {
  console.log(`app is listening on port ${this.address().port} `);
})

