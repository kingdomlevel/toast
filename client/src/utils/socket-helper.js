import io from 'socket.io-client';
let socket;

export const initSocket = (gameCode, nickname, isHost) => {
  socket = io("http://localhost:5000", {
    "force new connection": true,
    "reconnectionAttempts": "Infinity",
    "timeout": 10000,
    "transports": ["websocket"]
  });

  if (socket && gameCode && nickname && isHost) {
    // create a new room
    console.log('creating new room...');
    socket.emit('join', {
      gameCode,
      nickname,
      isHost
    });
  } else if (socket && gameCode) {
    
    // connect to an existing room
    console.log('connecting to existing room...');
    socket.emit('join', {
      gameCode,
      nickname
    });
  }
};

export const listenForJoinConfirmation = (gameCode, next) => {
  if (!socket) return;

  socket.on('join-confirmation', roomDeets => {
    roomDeets["gameCode "] = gameCode;
    localStorage.setItem(`room-${gameCode}`, JSON.stringify(roomDeets));

    next(roomDeets);
  });
}

export const listenForNoRoom = next => {
  if (!socket) return;

  socket.on('no-room', next)
}

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};
