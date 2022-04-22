//Write a JavaScript function that accepts a string as a parameter //and find the longest word within the string.

/*
1. Write the first line of the function

2. Create an if else statement that would filter whether the user has entered a number or string

2. Executes .split on the string to extract every individual word into an array as it's own element, initialized in the "splitWords" array

3. Execute .reduce on the array to loop throough and compare each element in the array to see which one is the longest and return that element to the function and a few extra "else" conditions in case there are equal lengths.

4.  And a final return which returns the longest element to the function
 */

const findLongestWord = string => {
  if (typeof string === "string") {
	 console.log("String magic: begin");
  } else {
	 console.log("Only strings allowed!");
  };
  let splitWords = string.split(" ");
  let longestWord = splitWords.reduce((wordA, wordB) => {
     if (wordA.length > wordB.length) {
		 return wordA;
	 } else if (wordA.length === wordB.length) {
		 return [wordA, wordB];
	 } else {
		 return wordB;
	 } 
  });
	return longestWord;
};

console.log(findLongestWord("Hey script, figure out which of these is the longest words please: Massachusetts"));
