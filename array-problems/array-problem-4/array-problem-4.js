//Write a JavaScript function to remove duplicate items from an array 
//(consider case sensitivity).

/*
1. Initialized a function expression to variable removeDuplicates with a 
parameter of "arr" for use for passed arrays

2. Initialise two empty arrays "numberArray" and "stringArray". Each will be used to pass each element that is a string or number
without any duplicate elements

3. Created a for loop to loop every index of the passed array with a nested if else if condition that checks if the 
current looped element is a string or number

4. Called the "findUniqueElement" function which accepts two parameters, one for the two arrays and one for the 
current looped element. An if condition in the function checks if that item is not in the passed array with the includes 
method. If it is not included, the following line of code pushes that element into the corresponding passed array

5. This is done for every element of the passed array in "removeDuplicates" until the array is looped, once looped, stringArray and numberArray 
are merged using the concat method, giving us our array without duplicates.
*/

const removeDuplicates = arr => {
	let stringArray = [];
	let numberArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "string") {
			findUniqueElement(stringArray, arr[i]);
		} else if (typeof arr[i] === "number") {
			findUniqueElement(numberArray, arr[i]);
		}
	}
	return stringArray.concat(numberArray);
};

const findUniqueElement = (arrOfItems, item) => {
	if (!arrOfItems.includes(item)) {
		arrOfItems.push(item);
	}	
}

console.log(removeDuplicates([3, 3, 4, "fine", "fine", "green"]));
console.log(removeDuplicates([5, 4, 3, 3, 5]));