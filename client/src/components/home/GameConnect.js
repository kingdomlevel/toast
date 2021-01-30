import React, { useState } from 'react';
import {generateGameCode} from '../../utils/randomWords';

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

  const handleGameCodeSubmit = event => {
    event.preventDefault();
    console.log("Joining game: " + gameCode)
  }

  return (
    <div>
      <form onSubmit={createGame}>
        <input
          type="submit"
          value="Create Game"
        />
      </form>

      <form onSubmit={handleGameCodeSubmit}>
        <label>
          Enter Game Code:
        <input
            type="text"
            value={gameCode}
            onChange={handleGameCodeChange} 
        />
        </label>
        <input
          type="submit"
          value="Join Game" 
        />
      </form>
    </div>
  )

}
export default GameConnect;
