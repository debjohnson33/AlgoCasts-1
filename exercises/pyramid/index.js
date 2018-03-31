// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, i = 0, stair = '') { // Recursion solution
	if (i === n) {
		return;
	}

	if (stair.length === (2 * n - 1)) {
		console.log(stair);
		return pyramid(n, i + 1);
	}
	const midpoint = Math.floor((2 * n - 1) / 2);
	let add;

	if (midpoint - i <= stair.length && midpoint + i >= stair.length) {
		add = '#';
	} else {
		add = ' ';
	}
	pyramid(n, i, stair + add);
}

module.exports = pyramid;

// function pyramid(n) {
// 	// Set midpoint of pyramid: Math.floor((2*n-1) / 2)
// 	// Iterate from 0 to n (rows)
// 	// Create an empty string
// 	// iterate from 0 to (2*n-1) (columns)
// 	// If column should have #
// 	//   Add a # to string
// 	// else
// 	//   Add a space to string
// 	// console log string at end of row loop
// 	const midpoint = Math.floor((2 * n - 1) / 2);
// 	for (let i = 0; i < n; i++) { // rows
//       let stair = "";
//        for (let j = 0; j < 2 * n - 1; j++) { // columns
//          if (midpoint - i <= j && midpoint + i >= j) {
//            stair += "#";
//          } else {
//            stair += " ";     //Solution #1
//          }
//        }
//        console.log(stair);
//     }
// }