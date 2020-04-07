// Assignment Code

var generateBtn = document.getElementById("generate");

var passwordBox = document.getElementById("password");

var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

var alphaNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'.split('');

var alphaSpec = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*'.split('');

var alphaNumSpec = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()-_=+'.split('');

var passwordText = document.querySelector("#password");

var numResults = [];



function generatePassword() {

  var passwordLength = prompt("How many characters do you want your password to be? (Enter a number between 8-128)");

  if (passwordLength >= 8 && passwordLength <= 128) {

    numResults = [];

    var specialChar = confirm("Do you want special characters in your password?");

    var numericChar = confirm("Do you want numbers in your password?");

    if (specialChar && numericChar) {

      for (i = 0; i < passwordLength; i++) {

        var randomNumber = Math.floor(Math.random() * alphaNumSpec.length);

        var hold = alphaNumSpec[randomNumber];

        numResults.push(hold);

        passwordThisIs = numResults.join('');

      }
    } else if (specialChar !== true && numericChar) {

      for (i = 0; i < passwordLength; i++) {

        var randomNumber = Math.floor(Math.random() * alphaNum.length);

        var hold = alphaNum[randomNumber];

        numResults.push(hold);

        passwordThisIs = numresults.join('');

      }
    } else if (specialChar && numericChar !== true) {

      for (i = 0; i < passwordLength; i++) {

        var randomNumber = Math.floor(Math.random() * alphaSpec.length);

        var hold = alphaSpec[randomNumber];

        numResults.push(hold);

        passwordThisIs = numResults.join('');

      }
    }

    else {

      for (i = 0; i < passwordLength; i++) {

        var randomNumber = Math.floor(Math.random() * alphabet.length);

        var hold = alphabet[randomNumber];

        numResults.push(hold);

        passwordThisIs = numResults.join('');

      }
    }

    passwordText.value = passwordThisIs;

  } else {

    alert("Please enter a number between 8-128")

  }
}



generateBtn.addEventListener("click", generatePassword);



