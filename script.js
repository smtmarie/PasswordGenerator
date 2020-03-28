// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var Char = [];

  //Array of special characters for password input
  var specialChar = [" ~ ! @ # $ % ^ & * + ? "].split("")

  //Array of numeric characters for password input
  var numericChar = [" 0 1 2 3 4 5 6 7 8 9 "].split("")

  //Array of lowercase characters for password input
  var lowerCaseChar = [" a b c d e f g h i j k l m n o p q r s t u v w x y z "].split("")

  //Array of uppercase characters for password input
  var upperCaseChar = [" A B C D E F G H I J K L M N O P Q R S T U V W X Y Z "].split("")
}

function userPasswordLength() {

  var passwordLength = parseInt(prompt("Please choose the amount of characters for your password. Password must be at least 8 characters long, not exceeding 128."));

  // if (isNAN(passwordLength) === true) {

  // }
  alert("Answer must be provided as a number");


  if (passwordLength < 8) {
    alert("Password must be at least 8 characters");

  } else if (passwordLength > 128) {
    alert("Password must not exceed 128 characters");


  } else {

    var specialCase = confirm("Do you want special characters?");
    var numericCase = confirm("Do you want numeric characters?");
    var lowerCase = confirm("Do you want lower case characters?");
    var upperCase = confirm("Do you want upper case characters?");

  }

}

var passwordText = document.querySelector("#password");

passwordText.value = password;

//Use prompts to select password choices


function getRandom(array) {

  var randIndex = Math.floor(Math.random() * array.length);
  var randElement = arrary[randIndex];

  return randElement;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
