import React, { useState } from 'react';
const randomWords = require('random-words');

function GameConnect({history}) {
  const [gameCode, setGameCode] = useState("");

  const handleGameCodeChange = event => setGameCode(event.target.value)

  const generateGameCode = event => {
    event.preventDefault();

    // generate new gameCode
    const [newGameCode] = randomWords({
      exactly: 1,
      wordsPerString: 2,
      separator:'-'
    });

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
      <form onSubmit={generateGameCode}>
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
