const fs = require("fs");
const chars = fs.readFileSync("./2015/Day 1/input.txt").toString();
let floor = 0;
for (let i = 0; i < chars.length; i ++) {
  if (chars[i] == "(") {
    floor ++;
  } else {
    floor --;
  }
  if (floor < 0) {
    console.log(i + 1);
    break;
  }
}