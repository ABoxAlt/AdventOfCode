// Importing the input data
const fs = require('fs');
const chars = fs.readFileSync('./2015/Day 3/input.txt').toString();
// Declaring vars
const houses = new Set();
  // Adding the initial house to the array
houses.add('0,0');
  // States which Santa is being used
let santa = false;
  // Coords for each Santa
let coordsS = [0, 0];
let coordsR = [0, 0];
// Looping over directions
for (const char of chars) {
  // Changing which Santa is used
  santa = !santa;
  // Adjusting coordinates
  switch (char) {
    case '<':
      // if an else are just compressed because its really a simple statement
      if (santa) {coordsS[0]--;}
      else {coordsR[0]--;}
      break;
    case '>':
      if (santa) {coordsS[0]++;}
      else {coordsR[0]++;}
      break;
    case '^':
      if (santa) {coordsS[1]++;}
      else {coordsR[1]++;}
      break;
    case 'v':
      if (santa) {coordsS[1]--;}
      else {coordsR[1]--;}
      break;
  }
  /* Adding the coordinates, while adding both every time would eliminate the need 
  to add the initial house I believe this solution is slightly more efficent and does not have errors */
  if (santa) {houses.add(coordsS[0] + ',' + coordsS[1]);}
  else {houses.add(coordsR[0] + ',' + coordsR[1]);}
}
// Print the Answer
console.log(houses.size);