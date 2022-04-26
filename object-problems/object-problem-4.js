//Create an object, then write a JavaScript function that checks whether an object contains the specified key.

/*
1. Create an object that has 4 key-value pairs

2. Initialise a function "findKeyInObj" to a function expression with two parameters, one for the object and one
for the property we are checking for.

3. In the first line of code use Object.keys method to return the passed object (obj) into an array assigned to
"arrayOfObj".

4. The second line of code takes the new array of properties "arrayOfObj" and the includes method is used to check the array
to see if the passed property (prop) is included in the array. Once looped and the property is found, it passes a boolean which 
is the goal of this problem, and the boolean is returned to the function.

*/

const superHero = {
	cape: "red",
	fly: true,
	bornAHero: false,
	city: "New York"
};

const findKeyInObj = (obj, prop) => {
	let arrayOfObj = Object.keys(obj);
	return arrayOfObj.includes(prop);
};

console.log(findKeyInObj(superHero, "fly"));
