import { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import LobbyContainer from './lobby/LobbyContainer';
import { generateNickname } from '../../utils/randomWords';
import { initSocket, listenForJoinConfirmation, listenForNoRoom } from '../../utils/socket-helper';

const RoomContainer = ({roomCode, isHost}) => {
  const [nickname, setNickname] = useState(generateNickname());
  const [, setSocketId] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [showLobby, setShowLobby] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(`room-${roomCode}`)) {
      // new client
      // make initial connection to room
      initSocket(roomCode, nickname, isHost);

      // redirect if room doesn't exist
      listenForNoRoom(() => setRedirect(true));

      // join success
      listenForJoinConfirmation(roomCode, roomDeets => {
        console.log('roomDeets: ', roomDeets);
      });
      
    } else {
      // client already in room
      const roomDeets = JSON.parse(localStorage.getItem(`room-${roomCode}`));
      setSocketId(roomDeets.socketId);
      setNickname(roomDeets.roomClients[roomDeets.socketId].nickname);
    }

    setShowLobby(true);
  }, [roomCode, isHost, nickname]);

  if (redirect) {
    return <Redirect to={{
      pathname: "/",
      state: roomCode
    }} />
  }

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