import React, { useState } from 'react';

function GameConnect() {
  const [gameCode, setGameCode] = useState("");

  const handleGameCodeChange = event => setGameCode(event.target.value)

  const handleGameCodeSubmit = event => {
    event.preventDefault();
    console.log("Joining game: " + gameCode)
  }

  return (
    <div>
      <form>
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
