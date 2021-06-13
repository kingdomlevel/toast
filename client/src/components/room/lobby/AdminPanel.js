import { useState } from "react";
import styled from "styled-components";
import Button from '../../../components/BaseComponents/Button';

//TASKS:
//set number of rounds
//set round time 
// display who is host
//set max players
//allow latecomers 

const AdminPanel = ({isHost, nickname}) => {
  const [roundNum, setRoundNum ] = useState(0);
  const [playerNum, setPlayerNum] = useState(0);
  const [timerNum, setTimerNum] = useState(0);
  const [lateComers, setLateComers] = useState(false);


  const handleRoundNum = (buttonDir) => {
    setRoundNum(buttonDir === 'more' ? roundNum + 1 : roundNum - 1);
  }

  const handleTimerNum = (buttonDir) => {
    setTimerNum(buttonDir === 'more' ? timerNum + 30 : timerNum - 30);

  }

  const handlePlayerNum = (buttonDir) => {
    setPlayerNum(buttonDir === 'more' ? playerNum + 1 : playerNum - 1);
  }

  const handleLateComer = (isHost, buttonDir) => {
    (isHost && buttonDir === 'more' ? setLateComers(!lateComers) : setLateComers(!lateComers));
  }

  let lateDisplay = '';
  {lateComers ? lateDisplay = 'Yes' : lateDisplay = 'No'};

  return (
    <>
  <Container>
      <SelectionsContainer>
        
        <SelectionContainer>
          <SelectionTitle>Round Count</SelectionTitle>
          <AdminButton buttonDir = 'less' disabled={roundNum <= 1}  onClick={() => {handleRoundNum('less', isHost)}}>{'<'}</AdminButton>
          <Display>{roundNum}</Display>
          <AdminButton buttonDir = 'more' disabled={roundNum >= 20} onClick={() => {handleRoundNum('more', isHost)}}>{'>'}</AdminButton>
        </SelectionContainer>

        <SelectionContainer>
          <SelectionTitle>Timer Count</SelectionTitle>
          <AdminButton  buttonDir = 'less' disabled={timerNum <= 0} onClick={() => {handleTimerNum('less', isHost)}}>{'<'}</AdminButton>
          <Display>{timerNum}s</Display>
          <AdminButton  buttonDir = 'more' disabled={timerNum >= 300} onClick={() => {handleTimerNum('more', isHost)}}>{'>'}</AdminButton>
        </SelectionContainer>

        <SelectionContainer>
          <SelectionTitle>Max Players</SelectionTitle>
          <AdminButton  buttonDir = 'less' disabled={playerNum <= 1} onClick={() => {handlePlayerNum('less', isHost)}}>{'<'}</AdminButton>
          <Display>{playerNum}</Display>
          <AdminButton  buttonDir = 'less' disabled={playerNum >= 10} onClick={() => {handlePlayerNum('more', isHost)}}>{'>'}</AdminButton>
        </SelectionContainer>

        <SelectionContainer>
          <SelectionTitle>Accept Late Comers?</SelectionTitle>
          <AdminButton buttonDir = 'more' disabled={!lateComers} onClick={() => {handleLateComer('more', isHost)}}>{'<'}</AdminButton>
          <Display>{lateDisplay}</Display>
          <AdminButton buttonDir = 'less' disabled={lateComers} onClick={() => {handleLateComer('less', isHost)}}>{'>'}</AdminButton>
        </SelectionContainer>
      </SelectionsContainer>
    <HostContainer>
      <HostDisplay>{nickname} is the host.</HostDisplay>
    </HostContainer>
  </Container>
    </>
  )
};

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `;

  const HostContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 300px;
    height: 50px;
    padding: 20px;
    border: 2px solid black;
    border-radius: 50px;
  `;

  const HostDisplay = styled.p`
    font-size: 30px;
  `;

  const SelectionTitle = styled.h4`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    border: 3px solid black;
    width: 3.5rem;
    height: 3.5rem;
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
    color: black;
  `;
  
  const SelectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 30px;
    width: 400px;
    height: 400px;
    background-color: red;
    opacity: 0.5;
    padding: 10px;
    margin: 25px;
  `;

  const SelectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 5px;
    width: 350;
    height: 60px;
    background-color: white;
  `;  

  const AdminButton = styled(Button)`
  display: flex;
  width: 80px;
  justify-content: center;
  font-size: 30px;
  color: yellow;
  align-items: center;
  height: 3.5rem;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;

  `;
 
 const Display = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    width: 80px; 
    height: 20px;
    
  `;

export default AdminPanel;


