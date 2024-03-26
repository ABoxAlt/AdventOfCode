const fs = require('fs');
const chars = fs.readFileSync('./2015/Day 3/input.txt').toString();
const houses = new Set();
houses.add('0,0');
let coords = [0, 0];
for (const char of chars) {
  switch (char) {
    case '<':
      coords[0]--;
      break;
    case '>':
      coords[0]++;
      break;
    case '^':
      coords[1]++;
      break;
    case 'v':
      coords[1]--;
      break;

  }
  console.log(char);
  houses.add(coords[0] + ',' + coords[1]);
}
console.log(houses.size);