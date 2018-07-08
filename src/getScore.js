const event = [];

let currentHomeScore = 0;
let currentAwayScore = 0;

// Events' populating
for (let i = 0; i < 5400; i += ~~(Math.random() * 5) + 1) {
  const shouldAddScore = ~~(Math.random() * 300) % 230 === 0;

  if (shouldAddScore) {
    if (currentHomeScore > currentAwayScore) {
      currentAwayScore++
    } else {
      currentHomeScore++
    }
  }

  if (~~(Math.random() * 10) % 2 === 0) {
    event.push({
      offset: i,
      score: [currentHomeScore, currentAwayScore],
    });
  } else {
    event.unshift({
      offset: i,
      score: [currentHomeScore, currentAwayScore],
    });
  }
}

// Implement this according to the task
const getScore = (offset) => {
  const closestEvent = event.reduce((acc, item) => {
    if (offset - item.offset >= 0) {
      return offset - item.offset >= offset - acc.offset ? acc : item;
    }
    return acc;
  }, {});

  const { score: [homeScore, awayScore] } = closestEvent;
  return `{home: ${homeScore}, away: ${awayScore}}`;
};

console.log('500', getScore(500));
console.log('1000', getScore(1000));
console.log('4000', getScore(4000));
console.log('5390', getScore(5390));

