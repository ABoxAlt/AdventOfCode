// Importing the input data
const fs = require("fs");
const chars = fs.readFileSync("./2015/Day 1/input.txt").toString();
// Declaring vars
let floor = 0;
// Looping over each instruction
for (const char of chars) {
  // Checking if the instruction calls for up 1 floor or down 1 floor
  if (char == "(") {
    floor ++;
  } else {
    floor --;
  }
}
// print the answer
console.log(floor);
