//Write a JavaScript function that accepts a string as a parameter and
//returns the number of vowels in that string

/*

1. Create a function that accepts a string as parameter

2. Use .split to make an array with each individual character and initial
that in a new variable equal to 'splitString'

3. Use the .filter method to find every letter that meets the condition 
and run .include to test if each one is a vowel

4. Then return the length property of the vowels variable which gives us
the amount of vowels in the string

*/

const stringConvert = string => {
  let splitString = string.split("");
  let vowels = splitString.filter(letters => {
    return ["a", "e", "i", "o", "u"].includes(letters);
  })
  return vowels.length;
};


console.log(stringConvert("Why don't you try and split this string into vowels, please?"));