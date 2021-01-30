const randomWords = require('random-words');
const { uniqueNamesGenerator, adjectives, names } = require('unique-names-generator');

export const generateGameCode = () => {
  const [newGameCode] = randomWords({
    exactly: 1,
    wordsPerString: 2,
    separator: '-'
  });

  return newGameCode;
}

export const generateNickname = () => {
  const nickname = uniqueNamesGenerator({
    dictionaries: [adjectives, names],
    length: 2,
    separator: '',
    style: 'capital'
  });

  return nickname;
};