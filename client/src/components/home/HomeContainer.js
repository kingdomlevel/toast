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

function HomeContainer() {

  return (
    <>
      <AppTitle />
      <RuleContainer>
      <Link to="/rules">
        <RuleButton>Rules</RuleButton>
      </Link>
      </RuleContainer>
      <GameConnect />
    </>
  );

}

export default HomeContainer;