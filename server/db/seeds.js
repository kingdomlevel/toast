// mongodb seeds go here
use toast;
db.dropDatabase();

const tunes = [
  {
    "title": "Amazing Grace",
    "artist": "",
    "difficulty": 1,
    "isThemeTune": false
  },
  {
    "title": "Bridge Over Troubled Water",
    "artist": " Simon & Garfunkel",
    "difficulty": 2,
    "isThemeTune": false
  },
  {
    "title": "Star Trek",
    "artist": "",
    "difficulty": 3,
    "isThemeTune": true
  },
  {
    "title": "The Bear Went Over the Mountain",
    "artist": "",
    "difficulty": 1,
    "isThemeTune": false
  },
  {
    "title": "London Calling",
    "artist": " The Clash",
    "difficulty": 2,
    "isThemeTune": false
  },
  {
    "title": "Hawaii Five - O",
    "artist": "",
    "difficulty": 3,
    "isThemeTune": true
  },
  {
    "title": "If You're Happy And You Know It",
    "artist": "",
    "difficulty": 1,
    "isThemeTune": false
  },
  {
    "title": "Purple Rain",
    "artist": " Prince",
    "difficulty": 2,
    "isThemeTune": false
  },
  {
    "title": "Cheers",
    "artist": "",
    "difficulty": 3,
    "isThemeTune": true
  }
];

db.tunes.insertMany(tunes);