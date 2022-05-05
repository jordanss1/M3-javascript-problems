//Write a JavaScript function to remove duplicate items from an array 
//(consider case sensitivity).

/*
1. Initialized a function expression to variable removeDuplicates with a 
parameter of "arr" for use for passed arrays

2. Initialise an empty array "finalArray" which will be used to pass each element that is a string or number
without any duplicate elements

3. Created a for loop to loop every index of the passed array with a nested function, the "findUniqueElement" function, which accepts 
two parameters, one for the array "finalArray" and one for the current looped element. An if condition in the function 
checks if that item is not in the passed array with the includes method. If it is not included the following line of 
code pushes that element into the passed array "finalArray", then the for loop moves to the next element and repeats the process

4. This is done for every element of the passed array in "removeDuplicates" until the array is looped, once looped, finalArray
is returned to the function, giving us our array without duplicates.
*/

const removeDuplicates = arr => {
	let finalArray = [];
	for (let i = 0; i < arr.length; i++) {
			findUniqueElement(finalArray, arr[i]);
		};
	return finalArray;
};

const findUniqueElement = (arrOfItems, item) => {
	if (!arrOfItems.includes(item)) {
		arrOfItems.push(item);
	}	
}

console.log(removeDuplicates([3, 3, 4, "fine", "fine", "green"]));
console.log(removeDuplicates([5, 4, 3, 3, 5]));