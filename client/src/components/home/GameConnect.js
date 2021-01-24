import React, { useState } from 'react';
const randomWords = require('random-words');

function GameConnect() {
  const [gameCode, setGameCode] = useState("");

  const handleGameCodeChange = event => setGameCode(event.target.value)

  const generateGameCode = event => {
    event.preventDefault();

    const [newGameCode] = randomWords({
      exactly: 1,
      wordsPerString: 2,
      separator:'-'
    });

    setGameCode(newGameCode);

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
