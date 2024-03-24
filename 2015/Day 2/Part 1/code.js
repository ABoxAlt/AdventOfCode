const fs = require("fs");
const lines = fs.readFileSync("./2015/Day 2/input.txt").toString().split("\n");
let total = 0;
for (const line of lines) {
  const [l, w, h] = line.split("x");
  total += Math.min(l * w, l * h, h * w) + (2 * (l * w + l * h + h * w));
}
console.log(total);