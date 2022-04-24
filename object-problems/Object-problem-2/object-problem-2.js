//Create an array of people objects with first name, last name, and age, then write a JavaScript function that takes 
//in an array and console logs the first and last names of all the people.

/*
1. Create an array with multiple objects that each represent different people

2. Initialise "fullName" assigned to a function expression with one paramter for arrays

3. Since each object is indexed starting from 0 within the array, create a for loop that loops the array
and in the code block console log a template literal that will show each "firstName" and "lastName" value 
on every loop. The index is appended by the property name we want to show, as this is how dot notation works.

*/

const people = [
	{
		firstName: "Jerry",
		lastName: "Smith",
		age: 32
	},

	{
		firstName: "Sarah",
		lastName: "Gilbert",
		age: 25
	},

	{
		firstName: "Matthew",
		lastName: "Phillips",
		age: 53
	}
]

const fullName = arr => {
	for (let i = 0; i < arr.length; i++) {
		console.log(`${arr[i].firstName} ${arr[i].lastName}`)
	}
}

fullName(people);