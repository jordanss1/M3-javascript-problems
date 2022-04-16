// Create a basic HTML page with a P element and a button on it. Then, write 
//a JavaScript function to set the background color of that paragraph using 
//an "onclick" event added to a button in the UI.

/*
1. Initialized variables at the top of script first with the corresponding elements needed 
for this problem using querySelector

2. Since arrow and function expressions must be defined before they are called 
(unlike function declarations) I defined it before I called it

3. In the function I used the globally scoped "p1" variable which is a reference to 
the <p> tag in the HTML I needed to use. I appended style to the variable and 
backgroundColor in order to style css in the code block

4. I called an onclick event on the "button1" globally scoped object and assigned it 
with the changeColor function, which styles the ackground red on-click of the button
*/

const p1 = document.querySelector("#p1");

const button1 = document.querySelector("#button1");

const changeColor = () => {
	p1.style.backgroundColor = "red";
};

button1.onclick = changeColor; 
