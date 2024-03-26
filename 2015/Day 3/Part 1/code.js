// Importing the input data
const fs = require('fs');
const chars = fs.readFileSync('./2015/Day 3/input.txt').toString();
// Declaring vars
const houses = new Set();
  // Adding the initial house to the array
houses.add('0,0');
let coords = [0, 0];
// Looping over directions
for (const char of chars) {
  // Adjusting coordinates
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
  // Adds the house to the set
  houses.add(coords[0] + ',' + coords[1]);
}
// Print the answer
console.log(houses.size);