// Code your solutions in this file
const names = ['Joe', 'Gabe', 'Lisa', 'Kaitlin', 'Jan'];

function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}
printBadges(names);


function tailsNeverFails (streak) {
  let coin = Math.random();
  let streak = 0;
  while (coin > 0.5) {
    let streak = (streak + 1);
    console.log (`You got ${newStreak + 1} tails in a row!`);
  }
}

tailsNeverFails (streak);
