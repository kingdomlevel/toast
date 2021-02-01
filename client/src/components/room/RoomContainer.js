import { useState, useEffect } from 'react';
import { generateNickname } from '../../utils/randomWords';
import { initSocket } from '../../utils/socket-helper';

const RoomContainer = ({roomCode, isHost}) => {
  const [nickname] = useState(generateNickname());
  const hostIntro = isHost ? 'i see you are the host!' : '';

  useEffect(() => {
    // make initial connection to room
    initSocket(roomCode, nickname, isHost);
  }, [roomCode, isHost, nickname]);

  return (
    <>
      <p>{hostIntro}</p>
      <p>Hello {nickname}!</p>
      <p>Welcome to the room of {roomCode}!</p>
    </>
  )
};

export default RoomContainer;