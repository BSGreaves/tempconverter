//VARIABLES

var outputDiv = document.getElementById("outputDiv");
var userInput = document.getElementById("userInput");
var celToFahRadio = document.getElementById("celToFahRadio");
var fahToCelRadio = document.getElementById("fahToCelRadio");
var convertButton = document.getElementById("convertButton");
var clearButton = document.getElementById("clearButton");
var mainForm = document.getElementById("mainForm");

//FUNCTION DECLARATIONS

//Turns input into a float
//Decided to use parsefloat so that any decimels will be used in the conversion math
function inputToNumber(input) {
	return input = parseFloat(input);
}

//Fahrenheit to Celsius, and rounds it off
function toCelsius(fahrenheit) {
	var celsius = (fahrenheit - 32) * (5/9);
	return celsius = Math.round(celsius);
}

//Celsius to Fahrenheit, and rounds it off
function toFahrenheit (celsius) {
	var fahrenheit = (celsius) * (9/5) + 32;
	return fahrenheit = Math.round(fahrenheit);
}

//Determines the color of the text, if converting to Fahrenheit
function fahDetermineColor (temp) {
	if (temp > 90) {
		return "red";
	} else if (temp < 32) {
		return "blue";
	} else {
		return "green";
	}
}

//Determines the color of the text, if converting to Celsius
function celDetermineColor (temp) {
	if (temp > 32) {
		return "red";
	} else if (temp < 0) {
		return "blue";
	} else {
		return "green";
	}
}

//Outputs the result, in the correct color
function outputToDiv (div, color, temp, scale) {
	return div.innerHTML = "<span class='" + color + "'>" + temp + " degrees " + scale + "</span>";
}

//The main function which is tiggered by the user
function convertTemp() {
	var userTemp = inputToNumber(document.getElementById("userInput").value);
	if (isNaN(userTemp)) {
		return outputDiv.innerHTML = "<span class='red'>Please type a number.</span>";
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
		return outputDiv.innerHTML = "<span class='red'>Please select whether to convert to Celsius or Fahrenheit.</span>";
	}
}

//EVENT LISTENERS

//Clear button
clearButton.addEventListener("click", function() {
	document.getElementById("mainForm").reset();
	outputDiv.innerHTML = "";
})
//Convert button
convertButton.addEventListener("click", convertTemp);

//In case they hit enter 
mainForm.addEventListener("keypress", function (e) {
	if (13 === e.keyCode) {
		convertTemp();
	}
});








