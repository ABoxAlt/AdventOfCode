const fs = require('fs');
const contents = fs.readFileSync('./2015/Day 5/input.txt').toString().split('\n');
let total = 0;
for (const line of contents) {
if (/([a-z][a-z]).*\1/i.test(line) && /([a-z]).\1/i.test(line)) {
    total ++;
  }
}
console.log(total);