//VARIABLES

var outputDiv = document.getElementById("outputDiv");
var userTemp = document.getElementById("userTemp").value;
var celToFahRadio = document.getElementById("celToFahRadio");
var fahToCelRadio = document.getElementById("fahToCelRadio");
var convertButton = document.getElementById("convertButton");
var clearButton = document.getElementById("clearButton");

//FUNCTION DECLARATIONS

function parseInput(input) {
	return input = parseFloat(input);
}

function toCelsius(fahrenheit) {
	var celsius = (fahrenheit - 32) * (5/9);
	return celsius = Math.round(celsius);
}

function toFahrenheit (celsius) {
	var fahrenheit = (celsius) * (9/5) + 32;
	return fahrenheit = Math.round(fahrenheit);
}

function fahDetermineColor (temp) {
	if (temp > 90) {
		return "red";
	} else if (temp < 32) {
		return "blue";
	} else {
		return "green";
	}
}

function celDetermineColor (temp) {
	if (temp > 32) {
		return "red";
	} else if (temp < 0) {
		return "blue";
	} else {
		return "green";
	}
}

function outputToDiv (div, color, temp, scale) {
	return div.innerHTML = "<span class='" + color + "'>" + temp + " degrees " + scale + "</span>";
}

function convertTemp() {
	var userTemp = parseInput(document.getElementById("userTemp").value);
	if (isNaN(userTemp)) {
		return outputDiv.innerHTML = "Please type a number.";
	}
	if (fahToCelRadio.checked) {
		userTemp = toCelsius(userTemp);
		outputColor = celDetermineColor(userTemp);
		return outputToDiv(outputDiv, outputColor, userTemp, "Celsius");
	} else if (celToFahRadio.checked) {
		userTemp = toFahrenheit(userTemp);
		outputColor = fahDetermineColor(userTemp);
		return outputToDiv(outputDiv, outputColor, userTemp, "Fahrenheit");
	} else {
		return outputDiv.innerHTML = "Please select whether to convert to celsius or fahrenheit.";
	}
}

//EVENT LISTENERS

clearButton.addEventListener("click", function() {
	document.getElementById("tempconverter").reset();
	outputDiv.innerHTML = "";
})
convertButton.addEventListener("click", convertTemp);

//** Assign a function to be executed when the user presses enter 
// document.addEventListener("keypress", function (e) {
// 	if (13 === e.which) {
// 		determineConverter();
// 	}
// }








