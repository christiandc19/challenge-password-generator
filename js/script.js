// Assignment code here


var upperCase = "ABCDEFGHIJKLMNOPQSTUVWXYZ"
var specialChar = "!@#$%^&*()_+"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var pwLength = "";

var generateBtn = document.querySelector("#generate");


function generatePassword() {
  userPassword = "";
  passwordCharacters = "";

  let pwLength = prompt("Please enter the length of your password. (Between 8 - 128)");

  if (pwLength >= 8 && pwLength <= 128) { //if this is true, perform the criteria alerts
    password.length = pwLength;

    //criteria alerts
    var isLowerCase = confirm("Do you want to include lower case to your password?");
    var isUpperCase = confirm("Do you want to include upper case to your password?");
    var IsNumeric = confirm("Do you want to include numbers to your password?");
    var hasSpecialChars = confirm("Do you want to include special characters to your password?");

  } else {
    alert("Password cannot be created. Please enter desired password length between 8 - 128.");
    return null;

  }
  if (isLowerCase === true && isUpperCase === true && IsNumeric === true && hasSpecialChars === true) {
    passwordCharacters += lowerCase += upperCase += numbers += specialChar;
  } else
    if (isLowerCase === false && isUpperCase === true && IsNumeric === true && hasSpecialChars === true) {
      passwordCharacters += upperCase += numbers += specialChar;
    } else
      if (isLowerCase === true && isUpperCase === true && IsNumeric === false && hasSpecialChars === true) {
        passwordCharacters += lowerCase += specialChar;
      } else
        if (isLowerCase === true && isUpperCase === true && IsNumeric === true && hasSpecialChars === false) {
          passwordCharacters += lowerCase += upperCase += numbers;
        } else
          if (isLowerCase === true && isUpperCase === false && IsNumeric === false && hasSpecialChars === false) {
            passwordCharacters += lowerCase;
          } else
            if (isLowerCase === false && isUpperCase === true && IsNumeric === false && hasSpecialChars === false) {
              passwordCharacters += upperCase;
            } else
              if (isLowerCase === false && isUpperCase === false && IsNumeric === true && hasSpecialChars === false) {
                passwordCharacters += numbers;
              } else
                if (isLowerCase === false && isUpperCase === false && IsNumeric === false && hasSpecialChars === true) {
                  passwordCharacters += specialChar;
                } else {
                  window.alert("Password cannot be created. Please choose atleast one character type.")
                }

  for (var i = 0; i < pwLength; i++) {
    userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return userPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

