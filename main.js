//VARIABLES

var outputDiv = document.getElementById("outputDiv");
var userInput = document.getElementById("userInput");
var celToFahRadio = document.getElementById("celToFahRadio");
var fahToCelRadio = document.getElementById("fahToCelRadio");
var convertButton = document.getElementById("convertButton");
var clearButton = document.getElementById("clearButton");
var mainForm = document.getElementById("mainForm");

//FUNCTION DECLARATIONS

//Decided to use parsefloat so that any decimels will be used in the conversion math
function inputToNumber(input) {
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
	div.innerHTML = "<span class='" + color + "'>" + temp + " degrees " + scale + "</span>";
}

function convertTemp() {
	var userTemp = inputToNumber(document.getElementById("userInput").value);
	if (isNaN(userTemp)) {
		outputDiv.innerHTML = "<span class='red'>Please type a number.</span>";
	} else if (fahToCelRadio.checked) {
		userTemp = toCelsius(userTemp);
		outputColor = celDetermineColor(userTemp);
		outputToDiv(outputDiv, outputColor, userTemp, "Celsius");
	} else if (celToFahRadio.checked) {
		userTemp = toFahrenheit(userTemp);
		outputColor = fahDetermineColor(userTemp);
		outputToDiv(outputDiv, outputColor, userTemp, "Fahrenheit");
	} else {
		outputDiv.innerHTML = "<span class='red'>Please select whether to convert to Celsius or Fahrenheit.</span>";
	}
}

//EVENT LISTENERS

clearButton.addEventListener("click", function() {
	document.getElementById("mainForm").reset();
	outputDiv.innerHTML = "";
})
convertButton.addEventListener("click", convertTemp);

//In case they hit enter
mainForm.addEventListener("keypress", function (e) {
	if (e.keyCode === 13) {
		convertTemp();
	}
});









