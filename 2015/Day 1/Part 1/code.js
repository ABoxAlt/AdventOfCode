const fs = require("fs");
const chars = fs.readFileSync("./2015/Day 1/input.txt").toString();
let floor = 0;
for (const char of chars) {
  if (char == "(") {
    floor ++;
  } else {
    floor --;
  }
}
console.log(floor);