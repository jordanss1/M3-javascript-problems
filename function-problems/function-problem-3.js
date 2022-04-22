//Write a JavaScript function that accepts two arguments, a string //and a letter and the function will
//count the number of occurrences of the specified letter within //the string

/*
1. Create first function line with two parameters

2. Initialize a variable with the array of every individual character of the string using .toLowerCase method on it to keep every letter lowercase so we don't get any bugs. Then use .split method on it, so each individual letter is returned to the array to filter for our specific letter 

3. Initialized a variable which holds a new array assigned to the execution of .filter being called on 'letterArray'. This callback function checks if each element in the array matches the argument by use of a boolean, which are then filtered to the new array "letterOccurence".

4. Final line in function returns the .length property on the array which returns how many times the letter occurs in our entered string
 */

const letterCount = (string, letter) => {
    let letterArray = string.toLowerCase().split("");
    let letterOccurence = letterArray.filter(letters => 
	  letter.includes(letters));
	return letterOccurence.length;
}

console.log(letterCount("Oranges, Apples, Pears, Grapes", "s"));
