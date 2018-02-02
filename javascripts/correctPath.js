/* For this challenge you will be traversing a matrix searching for the correct path to take.

Using the JavaScript language, have the function CorrectPath(str) read the str parameter being passed, which will represent the movements made in a 5x5 grid of cells starting from the top left position. The characters in the input string will be entirely composed of: r, l, u, d, ?. Each of the characters stand for the direction to take within the grid, for example: r = right, l = left, u = up, d = down. Your goal is to determine what characters the question marks should be in order for a path to be created to go from the top left of the grid all the way to the bottom right without touching previously travelled on cells in the grid. 

For example: if str is "r?d?drdd" then your program should output the final correct string that will allow a path to be formed from the top left of a 5x5 grid to the bottom right. For this input, your program should therefore return the string rrdrdrdd. There will only ever be one correct path and there will always be at least one question mark within the input string. 
*/

function CorrectPath(str) {
	debugger
    // create an array to hold the positions of the question marks
	let blankArray = [];
	// put the position of the '?' characters into the array
	str.split('').forEach((val, ind) => {
		if (val === '?') {
			blankArray.push(ind);
		}
	});
	
	let num = blankArray.length;
	
	// Try each possibility until find one that works. 
	// This will be 4^num <total> permutations
	let total = Math.pow(4, num);

	for (let i = 0; i < total; i++) {
	    // go through each permutation
	    // first creating a representative number
		let numString = (i + total).toString(4).slice(1);
		//let numString = (i + total).toString().slice(1);

		// then make the path
		let currentPath = createPath(str, blankArray, numString);

		// then test it
		if (isPathGood(currentPath)) {
			return currentPath;
		}
	}
}


isPathGood = (str) => {
	debugger
	//create our empty array
	let testArray = []
	for (let i = 0; i < 5; i++) {
		testArray.push([0, 0, 0, 0, 0])
	}

	let len = str.length;
	let currentLoc = [0, 0];

	for (let i = 0; i < len; i++) {
	    //mark our current square as visited
		testArray[currentLoc[0]][currentLoc[1]] = 1;
		//alter the position based on the next letter
		let newLoc = currentLoc.slice(0);
		switch (str[i]) {
			case 'u':
				newLoc[0]--;
				break;
			case 'd':
				newLoc[0]++;
				break;
			case 'r':
				newLoc[1]++;
				break;
			case 'l':
				newLoc[1]--;
				break;
		}
		//quit if we have gone off the board
		if (newLoc.includes (-1) || newLoc.includes (5)) {
				return false;
		}
		//quit if we are on a previously visited space
		if (testArray[newLoc[0]][newLoc[1]] === 1) {
			return false;
		}
		//return true if we are at the target square on our last go
		if (newLoc[0] === 4 && newLoc[1] === 4 && i === len - 1) {
			return true;
		}
		//update our location for the next loop;
		currentLoc = newLoc;
	}
	return false;
};

createPath = (str, blanks, num) => {
	debugger
	let moveArray = ['r', 'l', 'u', 'd'];
	strArr = str.split('');
	blanks.forEach((val, ind) => {
		strArr.splice(val, 1, moveArray[num[ind]]);
	});
	return strArr.join('');
};
   
// keep this function call here 
//CorrectPath(readline());
var pathString = prompt("Enter string for finding correct path: ");
console.log("String :: ", pathString);
console.log("the correct path is :: ", CorrectPath(pathString));
// "r?d?drdd" => "rrdrdrdd"
// "???rrurdr?" => "dddrrurdrd"
// "drdr??rrddd?" => "drdruurrdddd"

 
// keep this function call here 
CorrectPath(readline());