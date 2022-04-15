//Write a JavaScript function that accepts a string as a parameter and find the longest word within the //string.

/*
1. Write the first line of the function

2. Executes .split on the string to extract every individual word into an array as it's own element, initialized in the "words" array

3. Execute .reduce on the array to compare each string to see which one is the longest and return that string to the function

4.  
 */

const longestWord = string => {
  let words = string.split(" ");
  let longest = words.reduce((stringA, stringB) => {
     if (stringA.length > stringB.length) {
		 return stringA;
	 } else {
		 return stringB;
	 }
  )};
	return console.log(longest);
};

console.log(longestWord("The mighty mouse flew on an airplane and drove to Massachusetts"));
