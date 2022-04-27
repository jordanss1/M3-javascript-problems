//Write a JavaScript function to calculate the factorial of a number.

/*
1. Initialise "factorial" to a function expression with one parameter "num" for
numbers.

2. Since the factorial of a number is the product of itself and every number below it until 1 the first 
condition is our base case. If "num" is equal to or less than 1, return num

3. If the number is greater than one, call the function recursively, subtract "num" by 1 (return that number
to the next call of the "factorial") and multiply the difference by "num", which is held for the next function call
and looped until "num" <= 1. Then the number is returned giving us the factorial

*/

const factorial = num => {
	if (num <= 1) 
		return num;
	else 
		return num * factorial(num - 1);
};

console.log(factorial(5));

