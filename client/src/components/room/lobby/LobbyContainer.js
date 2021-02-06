import AdminPanel from './AdminPanel';

const LobbyContainer = ({showLobby, isHost, nickname}) => {
  if (!showLobby) return null;

  return (
    <>
      <p>Hello {nickname}</p>
      <AdminPanel isHost={isHost} />
    </>
  )
};

export default LobbyContainer;