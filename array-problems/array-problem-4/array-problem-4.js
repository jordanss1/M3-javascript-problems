//Write a JavaScript function to remove duplicate items from an array 
//(consider case sensitivity).

/*
1. Initialized a function expression to variable removeDuplicates with a 
parameter of "arr" for use for passed arrays

2. Created an if statement that checks if the elements in the array are strings 
and if so, to call .toString and .toLowerCase and then back to an array with   

*/

const removeDuplicates = arr => {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "string") {
			let lowerCaseArr = arr[i].toLowerCase();
			return lowerCaseArr;
		}
	}
}

console.log(removeDuplicates(["Hello", "Hi", "How are you", "Hi", "Hello"]));