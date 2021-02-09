import { useState, useEffect } from 'react';
import LobbyContainer from './lobby/LobbyContainer';
import { generateNickname } from '../../utils/randomWords';
import { initSocket } from '../../utils/socket-helper';

const RoomContainer = ({roomCode, isHost}) => {
  const [nickname] = useState(generateNickname());
  const [showLobby, setShowLobby] = useState(false);

  useEffect(() => {
    // make initial connection to room
    initSocket(roomCode, nickname, isHost);
    setShowLobby(true);
  }, [roomCode, isHost, nickname]);

  return (
    <>
      <LobbyContainer 
        showLobby={showLobby} 
        isHost={isHost}
        nickname={nickname}
      />
      <p>roomCode: {roomCode}</p>
    </>
  )
};

export default RoomContainer;