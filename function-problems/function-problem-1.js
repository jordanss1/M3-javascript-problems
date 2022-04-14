//Write a JavaScript function that accepts a string as a parameter and
//returns the number of vowels in that string

/*

1. Create a function that accepts a string as parameter

2. Use .split to make an array with each individual character and initialize
that in a new variable equal to 'splitString'

3. Use the .filter method to find every letter that meets the condition
and run .include to test if each one is a vowel

4. Then return the length property of the vowels variable which gives us
the amount of vowels in the string

 */

const stringConvert = string => {
    let splitString = string.split("");
    splitString.toLowerCase;
    let vowels = splitString.filter(letter => {
        return ["a", "e", "i", "o", "u"].includes(letter);
    })
        return vowels.length;
};

console.log(stringConvert("Everyone, why don't you try and split this string into vowels, please?"));
