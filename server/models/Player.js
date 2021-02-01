class Player {
  constructor(socketId, nickname) {
    this.socketId = socketId;
    this.nickname = nickname;
  }

    toString() {
      `{
        socketId: ${this.socketId},
        nickname: ${this.nickname}
      }`
    }
}

module.exports = Player