const $ = function (id) { return document.getElementById(id); };
var calculateChange = function () {
var cents = parseInt($("cents").value); 

//Display Error
if (cents <= 0 || cents > 99) {
alert("Enter a whole number between 0 and 99.");
}

var quarters = Math.floor(cents / 25);
cents %= 25;
//Displays Quarters
$("quarters").value = quarters

var dimes = Math.floor(cents / 10);
cents %= 10;
//Displays Dimes
$("dimes").value = dimes

var nickels = Math.floor(cents / 5);
cents %= 5;
//Displays Nickels
$("nickels").value = nickels

var pennies = Math.floor(cents / 1);
cents %= 1;
//Displays Pennies
$("pennies").value = pennies
};
 
window.onload = function () {
    $("calculate").onclick = calculateChange;
    };
