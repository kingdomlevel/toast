import { Link } from 'react-router-dom';
import AppTitle from './AppTitle';
import GameConnect from './GameConnect';
import styled from 'styled-components';

const RuleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function HomeContainer() {

  return (
    <>
      <AppTitle />
      <RuleContainer>
      <Link to="/rules">
        <button>Rules</button>
      </Link>
      </RuleContainer>
      <GameConnect />
    </>
  );

}

export default HomeContainer;