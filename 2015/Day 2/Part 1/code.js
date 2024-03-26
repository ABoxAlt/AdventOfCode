// Importing the input data
const fs = require('fs');
const lines = fs.readFileSync('./2015/Day 2/input.txt').toString().split('\n');
// Declaring vars
let total = 0;
// Looping over dimensions
for (const line of lines) {
  // Spliting into 3 vars and adding the correct amount
  const [l, w, h] = line.split('x');
  total += Math.min(l * w, l * h, h * w) + (2 * (l * w + l * h + h * w));
}
// Print the answer
console.log(total);
