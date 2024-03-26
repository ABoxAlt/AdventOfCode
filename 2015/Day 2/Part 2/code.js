// Importing the input data
const fs = require('fs');
const lines = fs.readFileSync('./2015/Day 2/input.txt').toString().split('\n');
// Declaring vars
let total = 0;
for (const line of lines) {
  // Spliting into 3 vars and adding the correct amount
  const [l, w, h] = line.split('x');
  total += Math.min((2 * (parseInt(l) + parseInt(w))), (2 * (parseInt(l) + parseInt(h))), (2 * (parseInt(h) + parseInt(w)))) + (l * w * h);
}
// Print the answer
console.log(total);
