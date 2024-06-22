const fs = require('fs');
const contents = fs.readFileSync('./2015/Day 6/Part 1/test.txt').toString().split('\n');
let lights = [];
for (let i = 0; i < 1000000; i ++) {
  lights.push(true);
}
for (const line of contents) {
  const [, , command, idxAx, numAy, idxBx, numBy] = /(turn )?(on|off|toggle) (\d+),(\d+) through (\d+),(\d+)/.exec(line);
  const idxAy = parseInt(numAy * 1000);
  const idxBy = parseInt(numBy * 1000);
  console.log(idxAy, idxBy);
  console.log(idxAx, idxBx);
  if (command != 'toggle') {
    for (let y = idxAy; y <= idxBy; y += 1000) {
      for (let x = idxAx; x <= idxBx; x++) {
        // when turn off is used it breaks?
        lights[y + x] = command == 'on'? true:false;
      }
    }
  } else {
    for (let y = idxAy; y <= idxBy; y += 1000) {
      for (let x = idxAx; x <= idxBx; x++) {
        lights[y + x] = !lights[y + x];
      }
    }
  }
}
console.log('counting');
let total = 0;
for (const num of lights) {
  if (num) {total ++;}
}
console.log('done');
console.log(total);