//Define a function that takes in an array of elements and joins them together 
// into a string separated by a comma with a space after the comma.

/*
1. Initialised a function expression to "toString" variable with one parameter.

2. Initialised an array to a global variable in order to show the function works
with an array referenced by a variable and with an array passed as an argument

3. "string" variable in function set to an empty string, to be used in the next line
of the function

4. The array passed as an argument to our function appended by the .join method with a
comma and a space as the seperator, which is then assigned to "string". This takes each element of an
array and joins them with our seperator into a string.

5. Two console logged versions of the function, one with an array referenced by a variable
and one with a fresh array passed as an argument

*/

let array = [2, 2, 3];

const tooString = (arr) => {
	return arr.join(", ");
}

console.log(tooString([1, 2, 3]))

console.log(tooString(array));