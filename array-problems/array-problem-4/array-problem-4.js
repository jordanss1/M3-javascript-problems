//Write a JavaScript function to remove duplicate items from an array 
//(consider case sensitivity).

/*
1. Initialized a function expression to variable removeDuplicates with a 
parameter of "arr" for use for passed arrays

2. Created an if statement that checks if the elements in the array are strings 
and if so, to call .toString and .toLowerCase on the array and assign it to "lowerCaseStr".
Now that our string is lowercase, we want it as an array again with each element as before,
so we use trhe .split method with a comma seperator which returns the array now lowercased.

3. We assign "finalStringArray" to an empty array and create our last for loop, which loops through
our array, the if statement checks if the elements are not included in the "finalStringArray"
and pushes those elements into our empty array, removing any duplicates.

4. We define "finalNumberArray" to an empty array. Our last for loop checks if each element
is a number, if so, another for loop is created to loop through the passed array to determine
if those elements are NOT included in "finalNumberArray". If the element is not included our
code executes to push those elements into "finalNumberArray". We then return that array.

*/

const removeDuplicates = arr => {
	let finalNumberArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "string") {
			let lowerCaseStr = arr.toString().toLowerCase();
			let lowerCaseArr = lowerCaseStr.split(",");
			let finalStringArray = [];
			for (let i = 0; i < lowerCaseArr.length; i++) {
				if (!finalStringArray.includes(lowerCaseArr[i])) {
					finalStringArray.push(lowerCaseArr[i]);
				}
			}
			return finalStringArray;
		} else if (typeof arr[i] === "number") {
			for (let i = 0; i < arr.length; i++) {
				if (!finalNumberArray.includes(arr[i])) {
					finalNumberArray.push(arr[i]);
				}
			}	
		}
			return finalNumberArray;
}
};



console.log(removeDuplicates(["fine", "fine", "green"]));