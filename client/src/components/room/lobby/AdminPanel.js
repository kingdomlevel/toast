import { useState } from "react";
import styled from "styled-components";

//TASKS:
//set number of rounds
//set round time 
// display who is host
//set max players
//allow latecomers 


const AdminPanel = ({isHost, nickname}) => {
  const [roundNum, setRoundNum ] = useState(0);
  const [playerNum, setPlayerNum] = useState(0);
  const [lateComers, setLateComers] = useState(false);


  const handleRoundNum = (buttonDir) => {
    setRoundNum(buttonDir === 'more' ? roundNum + 1 : roundNum - 1);
  }

  const handlePlayerNum = (buttonDir) => {
    setPlayerNum(buttonDir === 'more' ? playerNum + 1 : playerNum - 1);
  }

  const handleLateComer = (buttonDir) => {
    (buttonDir === 'more' ? setLateComers(!lateComers) : setLateComers(!lateComers));
  }

  let lateDisplay = '';
  {lateComers ? lateDisplay = 'Yes' : lateDisplay = 'No'};

  if (!isHost) return null;

  return (
    <>
      <HostDisplay>{nickname} is the host with the most.</HostDisplay>

      <SelectionsContainer>
        
        <RoundsContainer>
          <RoundButton  buttonDir = 'less' disabled={roundNum <= 1} onClick={() => {handleRoundNum('less')}}>{'<'}</RoundButton>
          <RoundDisplay>{roundNum}</RoundDisplay>
          <RoundButton buttonDir = 'more' disabled={roundNum >= 20} onClick={() => {handleRoundNum('more')}}>{'>'}</RoundButton>
        </RoundsContainer>

        <TimeContainer>Oh hi</TimeContainer>

        <MaxPlayerContainer>
          <PlayersButton  buttonDir = 'less' disabled={playerNum <= 1} onClick={() => {handlePlayerNum('less')}}>{'<'}</PlayersButton>
          <PlayerDisplay>{playerNum}</PlayerDisplay>
          <PlayersButton  buttonDir = 'less' disabled={playerNum >= 10} onClick={() => {handlePlayerNum('more')}}>{'>'}</PlayersButton>
        </MaxPlayerContainer>

        <LateContainer>
          <LateButton buttonDir = 'more' disabled={!lateComers} onClick={() => {handleLateComer('more')}}>{'<'}</LateButton>
          <LateDisplay>{lateDisplay}</LateDisplay>
          <LateButton buttonDir = 'less' disabled={lateComers} onClick={() => {handleLateComer('less')}}>{'>'}</LateButton>
        </LateContainer>
      </SelectionsContainer>
    </>
  )
};

  const HostDisplay = styled.p`
    font-size: 30px;
  `;
  
  const SelectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 400px;
    background-color: red;
    opacity: 0.5;
    padding: 10px;
  `;
  
  const RoundsContainer = styled.div`
    display: flex;
    padding: 10px;
    margin: 5px;
    width: 350;
    height: 40px;
    background-color: white;
  `;

  const RoundButton = styled.button`
    display: flex;
    width: 80px; 
    height: 20px;
  `;

  const RoundDisplay = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    width: 80px; 
    height: 20px;

  `;
  
  const TimeContainer = styled.div`
    display: flex;
    padding: 10px;
    margin: 5px;
    width: 350;
    height: 40px;
    background-color: white;
  `;
  
  const MaxPlayerContainer = styled.div`
    display: flex;
    padding: 10px;
    margin: 5px;
    width: 350;
    height: 40px;
    background-color: white;
  `;

  const PlayersButton = styled.button`
    display: flex;
    width: 80px; 
    height: 20px;
  `;

  const PlayerDisplay = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    width: 80px; 
    height: 20px;
  `;
  
  const LateContainer = styled.div`
    display: flex;
    padding: 10px;
    margin: 5px;
    width: 350;
    height: 40px;
    background-color: white;
  `;

  const LateButton = styled.button`
    display: flex;
    width: 80px; 
    height: 20px;
  `;

  const LateDisplay = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    width: 80px; 
    height: 20px;
  `;




export default AdminPanel;


