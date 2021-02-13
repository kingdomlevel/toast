class Player {
  constructor(socketId, nickname, isHost) {
    this.socketId = socketId;
    this.nickname = nickname;
    this.isHost = isHost;
  }
}

module.exports = Player