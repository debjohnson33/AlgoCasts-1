// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// return str.split('').reverse().join(''); Solution 1

	// let reversed = '';	              Solution 2
	// for (let character of str) {
	// 	reversed = character + reversed;
	// }	
	// return reversed;

	return str.split('').reduce((rev, char) => char + rev, '');// Solution 3

}

module.exports = reverse;
