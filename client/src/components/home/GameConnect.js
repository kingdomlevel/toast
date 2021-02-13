import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const CreateGameButton = styled.button`
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

function GameConnect() {
  const [gameCode, setGameCode] = useState("");

  const handleGameCodeChange = event => setGameCode(event.target.value)

  const handleGameCodeSubmit = event => {
    event.preventDefault();
    console.log("Joining game: " + gameCode)
  }

  return (
    <>
      <Form>
      <CreateGameButton type="submit">
        Create Game
      </CreateGameButton>
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
        <CreateGameButton type="submit">Join Game</CreateGameButton>
      </Form>
    </>
  )

}
export default GameConnect;
