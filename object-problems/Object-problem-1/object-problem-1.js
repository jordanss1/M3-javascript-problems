//Create a sample object, then write a JavaScript function that deletes 
//the property of an object passed to it.

/*
1. Create an object with a few key-value pairs

2. Initialised "removeProperty" to a function expression with two parameters, one for 
the object and one for property.

3. The next lines of code call on the object and property using bracket notation with the
object and property names passed as arguments and delete and return the object to the function

*/

const craig = {
	hometown: "Alabama",
	age: 23,
	male: true
};

const removeProperty = (obj, prop) => {
	delete obj[prop];
	return obj;
}

console.log(removeProperty(craig, "age"));
