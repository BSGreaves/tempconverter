//FUNCTION DECLARATIONS



//**Function: which radio button is checked?
function determineConverter(clickEvent) {
	if (fahToCelRadio.checked) {
		//Call a function to turn user input to celsius
	} else if (celToFahRadio.checked) {
		//Call a function to turn user input to fahrenheit
	} else {
		//Tell the user they need to select a radio button
	}
}

//** Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

//** Assign a function to be executed when the user presses enter 
document.addEventListener("keypress", function (e) {
	if (13 === e.which) {
		determineConverter();
	}
}



//**Function: F to C
function toCelsius(userFahrenheit) {
	var outputCelsius = (userFahrenheit - 32) * (5/9);
	return outputCelsius;
}


//**Function: C to F
function toFahrenheit (userCelsius) {
	var outputFahrenheit = (userCelsius) * (9/5) + 32;
	return outputFahrenheit;
}



//**Function to turn user input into an integer
function validateInput(userInput) {
	userInput = userInput.parseInt;
	if (Number.isInteger(userInput)) {
		//Do something
	} else {
		//throw an error at the user
	}
}

//**Get a reference to the button element in the DOM
var button = document.getElementById("converter");




//VARIABLES

//**Grab the variable by DOM
var outputDiv = document.getElementById("outputDiv")
var tempToConvert = document.getElementById("userTemp").innerhtml
var celToFahRadio = document.getElementById("celToFahRadio");
var fahToCelRadio = document.getElementById("fahToCelRadio");





