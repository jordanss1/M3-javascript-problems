const options = () => {
	let select = document.querySelector("#dog-names");
	let p1 = document.querySelector("p");
	let dogNames = select.querySelectorAll("option");
	console.log(dogNames);
};

options();