const fs = require('fs');
const contents = fs.readFileSync('./2015/Day 3/input.txt').toString().split('\n');
let total = 0;
for (const line of contents) {
  if (/(a|e|i|o|u).*(a|e|i|o|u).*(a|e|i|o|u)/i.test(line)) {
    total ++;
  }
}
console.log(total);