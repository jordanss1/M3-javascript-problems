//Write a JavaScript function to sort the following array of objects by title value.

/*
1. Used the sort method on "books" with two parameters for our compare function.

2. Each line in the if else statement is comparing the "title" property from one element to the 
title property in the next element. We want it in ascending order so we return a 1 in our first code block 
if a is larger than b, placing it in ascending order.

3. And if b is larger than a we return a -1 to keep in ascending order. Our final condition checks if they are equal
and nothing changes in that case.

*/

const books = [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245},

   ];


books.sort( (a, b) => {
	if (a.title > b.title) {
		return 1;
	} else if (a.title < b.title) {
		return -1;
	} else {
		return 0;
	}
});

console.log(books)


