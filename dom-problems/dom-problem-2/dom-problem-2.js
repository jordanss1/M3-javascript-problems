//Create an HTML page with a button and a P element with a link inside.Then, write a JavaScript 
//function to get the HREF attribute of the link when you click the button.

/*

1. Called querySelector on document with the buttons ID as an argument to initialize the button 
needed to it's variable

2. Created a function with the anchor from the HTML, called with querySelector and locally 
scoped to keep global namespace cleaner 

3. Initialized the href attribute of "anchor1" to "href1" and executed an alert on the following
line with the href in a message

*/

const button1 = document.querySelector("#button1");

const hrefGet = () => { 
	const anchor1 = document.querySelector("#anc1");
	let href1 = anchor1.href;
	alert(href1);
}
	
button1.onclick = hrefGet;
