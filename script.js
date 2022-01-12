// Assignment code here


  var upperCase = "ABCDEFGHIJKLMNOPQSTUVWXYZ"
  var specialChar = "!@#$%^&*()_+"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var pwLength ="";

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  userPassword = "";
  passwordCharacters = "";

let pwLength = prompt("Please select the length of your password. (Between 8 - 128)");

if (pwLength >= 8 && pwLength <= 128) {
  password.length = pwLength;

  var isLowerCase = confirm("include lower case");
  var isUpperCase = confirm("include upper case");
  var IsNumeric = confirm("include numbers");
  var hasSpecialChars = confirm("include special characters");
} else {
  alert("Please select a password between 8 - 128");
}

if (isLowerCase === true) {
  passwordCharacters += lowerCase;
}
if (isUpperCase === true) {
  passwordCharacters += upperCase;
}
if (IsNumeric === true) {
  passwordCharacters += numbers;
}
if (hasSpecialChars === true) {
  passwordCharacters += specialChar;
} else {
  alert("Error");
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



