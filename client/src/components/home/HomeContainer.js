import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppTitle from './AppTitle';
import GameConnect from './GameConnect';
import styled from 'styled-components';

const RuleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const RuleButton = styled.button`
  font-weight: 600;
  margin: 10px;
  width: 100px;
  border: none;
  color: #FF7B9C;
  background-color: #41EAD4;
  border-radius: 30px;
  padding: 5px;
  
`;

const NoGameMsg = styled.p`
  background-color: red;
  width: fit-content;
  margin: 5px;
  font-size: 1.2em;
`

function HomeContainer({ history, location }) {
  const [noRoomMsg, setNoRoomMsg] = useState(null);

  useEffect(() => {
    if (location.state && location.state.noRoom) {
      setNoRoomMsg(`no game at ${location.state.noRoom}`);
    }
    history.replace();
  }, [location.state, history]);

  return (
    <>
      <AppTitle />
      <RuleContainer>
        <Link to="/rules">
          <RuleButton>Rules</RuleButton>
        </Link>
      </RuleContainer >
      <NoGameMsg>{noRoomMsg}</NoGameMsg>
      <GameConnect history={history} />
    </>
  );

}

export default HomeContainer;