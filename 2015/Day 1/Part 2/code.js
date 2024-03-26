// Importing the input data
const fs = require('fs');
const chars = fs.readFileSync('./2015/Day 2/input.txt').toString();
// Declaring vars
let floor = 0;
// Using i to tell which index the first basement floor is
for (let i = 0; i < chars.length; i ++) {
  // Checking if Santa needs to go up or down
  if (chars[i] == '(') {
    floor ++;
  } else {
    floor --;
  }
  // If Santa enters the basement log the answer and end
  if (floor < 0) {
    console.log(i + 1);
    break;
  }
}
