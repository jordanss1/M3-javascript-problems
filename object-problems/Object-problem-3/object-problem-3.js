//Create an object with three items in it, then write a JavaScript function that accepts an object and 
//tells you the length (tells you how many items are in it) of the object

/*

1. Initialised "book" to an object with three key-value pairs

2. Initialised a function expression to a variable "lengthOfObject"

3. Using a for.. in loop and logging the length would give me the properties and value pairs
so I did research and the best way to go about this was to turn the object to an array
which gives us the actual length of the object, because only the properties count as the length.

4. Used the built in Object.keys method calling the passed object (obj) with length appended and 
console logged it on the next line of code giving us the length of the object.

*/

const book = {
	author: "unknown",
	totalPages: 5001,
	madeIn1900s: true,
};

const lengthOfObject = obj => {
	let objectArray = Object.keys(obj).length;
	return objectArray;
};

console.log(lengthOfObject(book));