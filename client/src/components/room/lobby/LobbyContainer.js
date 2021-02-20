import styled from 'styled-components';
import AdminPanel from './AdminPanel';

const PlayButton = styled.button`
  display: flex;
  width: 80px; 
  height: 20px;
`;

const NameDisplay = styled.div`
  display: flex;
  justify-content: center;
  width: 190px;
  margin: 10px;
  height: 30px;
`;

const LobbyContainer = ({showLobby, isHost, nickname}) => {
  if (!showLobby) return null;

  return (
    <>
    <NameDisplay>
      <p>Hello {nickname}</p>
    </NameDisplay>
      <PlayButton>PLAY</PlayButton>
      <AdminPanel isHost={isHost} nickname={nickname} />
    </>
  )
};

export default LobbyContainer;

//button for play (launchGame function);
//room code + copy button