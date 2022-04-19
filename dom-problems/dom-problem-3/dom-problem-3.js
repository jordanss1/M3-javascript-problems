//Create a HTML page with a dropdown list with three 
//items in it, then write a JavaScript function that 
//displays the number of items and displays the item 
//in the list when you select from the dropdown.

/*
1. Declared "dogNames" variable outside of function as it would need to be used 
when applying the onchange event globally

2. Created function and initialised a variable assigned to which ever selected 
index of the select tag that is chosen. Initialised the p tag to its own variable.

3. Used .innerText on the <p> to display a template literal in order to display the 
text of the selected option and the total number of options.

4. Finally attached the onclick event to our select element so everytime an option is 
chosen in the dropdown, onchange runs the "options" function



*/

let dogNames = document.querySelector("#dog-names");

const options = () => {
	let selected = dogNames.selectedIndex;
	let p1 = document.querySelector("p");
	let p2 = document.getElementById("#p2")
	p1.innerText = `${dogNames.options[selected].text} is the option selected and there 
	are ${dogNames.length} options total`;
};

dogNames.onchange = options;