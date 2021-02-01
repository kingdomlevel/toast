class Room {
  constructor(roomCode){
    this.roomCode = roomCode;
    this.clients = {};
  }

  addClient(newClient) {
    this.clients[newClient.socketId] = newClient;
  }
}

module.exports = Room;