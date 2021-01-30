import { useState } from 'react';
import {generateNickname} from '../../utils/randomWords';

const RoomContainer = ({roomCode, isHost}) => {
  const [nickname] = useState(generateNickname());
  const hostIntro = isHost ? 'i see you are the host!' : '';

  return (
    <>
      <p>{hostIntro}</p>
      <p>Hello {nickname}!</p>
      <p>Welcome to the room of {roomCode}!</p>
    </>
  )
};

export default RoomContainer;