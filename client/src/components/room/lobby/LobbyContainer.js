import styled from 'styled-components';
import AdminPanel from './AdminPanel';

const PlayButton = styled.button`
  display: flex;
  background-color: red;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
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

const AdminPanelContainer = styled.div`
  display: flex;
  justify-content: center;

`;

const LobbyContainer = ({showLobby, isHost, nickname}) => {
  
  return (
    <>
    <NameDisplay>
      <p>Hello {nickname}</p>
    </NameDisplay>
      <PlayButton>PLAY</PlayButton>
      <AdminPanelContainer>
        <AdminPanel isHost={isHost} nickname={nickname} />
      </AdminPanelContainer>
    </>
  )
};

export default LobbyContainer;

//button for play (launchGame function);
//room code + copy button