const randomWords = require('random-words');

export const generateGameCode = () => {
  const [newGameCode] = randomWords({
    exactly: 1,
    wordsPerString: 2,
    separator: '-'
  });

  return newGameCode;
}