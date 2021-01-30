const RoomContainer = ({roomCode, isHost}) => {
  const hostIntro = isHost ? 'i see you are the host!' : '';

  return (
    <>
      <p>{hostIntro}</p>
      <p>Welcome to the room of {roomCode}!</p>
    </>
  )
};

export default RoomContainer;