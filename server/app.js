const express = require('express');
const Player = require('./models/Player');
const Room = require('./models/Room');
const app = express();
const http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const allRooms = {};

// socket.io connections
io.on('connection', socket => {
  const socketRooms = io.sockets.adapter.rooms;

  socket.on('join', newConnection => {
    const {gameCode} = newConnection;

    socket.join(gameCode);
    const clientsInRoom = socketRooms.get(gameCode);
    
    if (clientsInRoom.size === 1) {
      // save new room
      allRooms[gameCode] = new Room(gameCode);
    }
    
    const newClient = new Player(socket.id, newConnection.nickname);
    allRooms[gameCode].addClient(newClient);
    
    // this gets an array of Player objects in the game
    //... i think this will be useful at some point (when adding a new player, return these to client?)
    const roomClients = allRooms[gameCode].clients;
    console.log(`room ${gameCode}: `, roomClients);
  })
});

http.listen(5000, function() {
  console.log(`app is listening on port ${this.address().port} `);
})