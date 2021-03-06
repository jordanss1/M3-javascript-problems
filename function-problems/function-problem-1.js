//Write a JavaScript function that accepts a string as a parameter and
//returns the number of vowels in that string

/*

1. Create a function that accepts a string as parameter

2. Use .split to make an array with each individual character and initialize
that in a new variable equal to 'splitString'

3. Use .map on the 'firstArray' to turn each element (which are strings) to lowercase by using .toLowerCase on each element

4. Use the .filter method to find every letter that meets the condition
and run .include to test if each one is a vowel

5. Then return the length property of the vowels variable which gives us
the amount of vowels in the string

 */

const vowelCount = string => {
    let arrayOfCharacters = string.toLowercase().split("");
    let vowels = arrayOfCharacters.filter(letter => {
        return ["a", "e", "i", "o", "u"].includes(letter);
    })
        return vowels.length;
};

console.log(vowelCount("Everyone, why don't you try and split this string into vowels, please?"));
