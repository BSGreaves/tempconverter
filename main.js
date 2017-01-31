//VARIABLES

var outputDiv = document.getElementById("outputDiv");
var userTemp = document.getElementById("userTemp").value;
var celToFahRadio = document.getElementById("celToFahRadio");
var fahToCelRadio = document.getElementById("fahToCelRadio");
var convertButton = document.getElementById("convertButton");
var clearButton = document.getElementById("clearButton");

//FUNCTION DECLARATIONS

//**Function to turn user input into a number
function parseInput(input) {
	return parseFloat(input); 
}

//** Assign a function to be executed when the user presses enter 
// document.addEventListener("keypress", function (e) {
// 	if (13 === e.which) {
// 		determineConverter();
// 	}
// }

//**Function: F to C
function toCelsius(fahrenheit) {
	var celsius = (fahrenheit - 32) * (5/9);
	return celsius;
}


//**Function: C to F
function toFahrenheit (celsius) {
	var fahrenheit = (celsius) * (9/5) + 32;
	return fahrenheit;
}

//**Function: which radio button is checked?
// function convertTemp() {
// 	var userTemp = parseInput(document.getElementById("userTemp").value);
// 	if (isNaN(userTemp)) {
// 		return outputDiv.innerHTML = "Please write a number.";
// 	}
// 	if (fahToCelRadio.checked) {
// 		return outputDiv.innerHTML = toCelsius(userTemp);
// 	} else if (celToFahRadio.checked) {
// 		return outputDiv.innerHTML = toFahrenheit(userTemp);
// 	} else {
// 		return outputDiv.innerHTML = "Please select whether to convert to celsius or fahrenheit.";
// 	}
// }

function convertTemp() {
	var userTemp = parseInput(document.getElementById("userTemp").value);
	if (isNaN(userTemp)) {
		return outputDiv.innerHTML = "Please write a number.";
	}
	if (fahToCelRadio.checked) {
		toCelsius(userTemp);
		if (userTemp > 32) {
			return outputDiv.innerHTML = "<span class='red'>" + userTemp + "</span>";
		} else if (userTemp < 0) {
			return outputDiv.innerHTML = "<span class='blue'>" + userTemp + "</span>";
		} else {
			return outputDiv.innerHTML = "<span class='green'>" + userTemp + "</span>";
		}
	} else if (celToFahRadio.checked) {
		toFahrenheit(userTemp);
		if (userTemp > 90) {
			return outputDiv.innerHTML = "<span class='red'>" + userTemp + "</span>";
		} else if (userTemp < 32) {
			return outputDiv.innerHTML = "<span class='blue'>" + userTemp + "</span>";
		} else {
			return outputDiv.innerHTML = "<span class='green'>" + userTemp + "</span>";
		}
	} else {
		return outputDiv.innerHTML = "Please select whether to convert to celsius or fahrenheit.";
	}
}



// console.log("13: ", validateInput(13));
// console.log("1.5: ", validateInput(1.5));
// console.log("13 string: ", validateInput("13"));
// console.log("1.5 string: ", validateInput("1.5"));
// console.log("clown: ", validateInput("clown"));

//EVENT LISTENERS

clearButton.addEventListener("click", function() {
	document.getElementById("tempconverter").reset();
})
convertButton.addEventListener("click", convertTemp);








