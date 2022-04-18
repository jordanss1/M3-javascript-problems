//Create a HTML page with a dropdown list with three 
//items in it, then write a JavaScript function that 
//displays the number of items and displays the item 
//in the list when you select from the dropdown.

/*
1. Declared "dogNames" variable outside of function as it would need to be used when applying the onchange event globally

2. Created function and initialised a variable assigned to the select tag 

*/

let dogNames = document.querySelector("#dog-names");

const options = () => {
	let selected = dogNames.selectedIndex;
	let p1 = document.querySelector("p");
	p1.innerText = dogNames.options[selected].text;
	
};

dogNames.onchange = options();