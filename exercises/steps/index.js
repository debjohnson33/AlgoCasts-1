// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {

  // for (let i = 0; i < n; i++) { // rows
  //   let stair = "";
  //    for (let j = 0; j < n; j++) { // columns
  //      if (j <= i) {
  //        stair += "#";
  //      } else {
  //        stair += " ";			Solution #1
  //      }
  //    }
  //    console.log(stair);
  // }

  // Recursion - Solution #2:
  // Find base case first
  if (n === row) {
  	return;
  }
  if (n === stair.length) {
  	console.log(stair); // Do some work
  	steps(n, row + 1); // Then call function again 
  }					   // with a change to the variable
  const add = stair.length <= row ? '#' : ' ';
  }
  steps(n, row, stair + add);

}

module.exports = steps;
