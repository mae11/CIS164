"use strict";
var $ = function(id) { return document.getElementById(id); };

var clearTextBoxes = function() {
	$("degrees_entered").value = "";
	$("degrees_computed").value = "";
	};

//This function changes the conversion
function toCelsius() {
	$("degree_label_1").innerHTML = "Enter F degrees:";
	$("degree_label_2").innerHTML = "Degrees Celsius::";
	clearTextBoxes();
	}

function toFahrenheit() {
	$("degree_label_1").innerHTML = "Enter C degrees:";
	$("degree_label_2").innerHTML = "Degrees Fahrenheit:";
	clearTextBoxes();
	}

//This function will convert the temperatures
function convertTemp() {
var temp = parseFloat($("degrees_entered").value);

//Validates the inputs
if(isNaN(temp)) {
	alert("You need to enter a valid value for degrees.");
	}
	else {
//Checks and converts
if($("to_celsius").checked) {
	$("degrees_computed").value = (temp-32)/1.8;
	}
	else {
	$("degrees_computed").value = (temp*1.8)+32;
}
}
}
//Inputs are shown
window.onload = function() {
	$("convert").onclick = convertTemp;
	$("to_celsius").onclick = toCelsius;
	$("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
	};
