import {generateGameCode} from '../../utils/randomWords';
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const CreateGameButton = styled.input`
  font-weight: 600;
  margin: 10px;
  width: 100px;
  border: none;
  color: #FF7B9C;
  background-color: #41EAD4;
  border-radius: 30px;
  padding: 5px;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 20px;
  margin: 10px;
  border-radius: 20px;
  border: none;
  background-color: #f8edeb; 
`;

const GameCodeLabel = styled.label`
  font-size: 20px;
  color: #FF7B9C;
  font-weight: 600;
`;

function GameConnect({history}) {
  const [gameCode, setGameCode] = useState("");

  const handleGameCodeChange = event => setGameCode(event.target.value)

  const createGame = event => {
    event.preventDefault();

    const newGameCode = generateGameCode();

    setGameCode(newGameCode);

    // direct user to new room
    history.push({
      pathname: `/${newGameCode}`,
      state: {isHost: true}
    })

  }

  //join an existing game
  const handleGameCodeSubmit = event => {
    event.preventDefault();
    console.log("Joining game: " + gameCode)
    history.push({
      pathname: `/${gameCode}`,
      state: {isHost: false}

    })
  }

  return (
    <>
      <Form onSubmit={createGame}>
      <CreateGameButton type="submit" value='Create Game' />
      </Form>

      <Form onSubmit={handleGameCodeSubmit}>
        <GameCodeLabel>
          Enter Game Code:
        <StyledInput
            type="text"
            value={gameCode}
            onChange={handleGameCodeChange} 
        />
        </GameCodeLabel>
        <CreateGameButton type="submit" value="Join Game" />
      </Form>
    </>
  )

}
export default GameConnect;
