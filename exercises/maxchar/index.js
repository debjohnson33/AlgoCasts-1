// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const charMap = {};
	let max = 0;
	let mostUsed = "";
	for (let char of str) {
		charMap[char] = charMap[char] + 1 || 1;
		if (charMap[char] > max) {			// Can put if statement in
			mostUsed = char;				// a different for loop
			max = charMap[char];			// to iterate over object
		}
	}
	return mostUsed;
}

module.exports = maxChar;
