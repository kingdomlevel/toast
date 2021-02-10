import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
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
      <input
        type="submit"
        value="Create Game"
      />
      </Form>

      <Form onSubmit={handleGameCodeSubmit}>
        <GameCodeLabel>
          Enter Game Code:
        <input
            type="text"
            value={gameCode}
            onChange={handleGameCodeChange} 
        />
        </GameCodeLabel>
        <input
          type="submit"
          value="Join Game" 
        />
      </Form>
    </>
  )

}
export default GameConnect;
