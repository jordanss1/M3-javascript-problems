//Write a JavaScript function to compute the sum of an array of integers.

/*
1. Create an array of integers initialised to "integers"

2. Initialise "sumOfIntegers" to a function expression with one paramter "arr" 

3. The stopping condition checks if there is only one element left and if so, return
the zeroth index, which is the sum of the array

4. Otherwise, if the length of the array is greater than 1, .pop is called on the array to remove
the last item of the array and add it to an element in the array, leaving one less integer. sumOfIntegers
then takes the array through the conditions until only one element is left and that element is returned
as the sum.

*/

const integers = [1, 6, 3, 10];


const sumOfIntegers = (arr) => {
	if (arr.length === 1)
		return arr[0];
	else  
		return arr.pop() + sumOfIntegers(arr);
};

console.log(sumOfIntegers(integers));

