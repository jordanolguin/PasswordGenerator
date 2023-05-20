// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "!@#$%^&*()";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordOptions = [];
  var finalPassword = [];
  var length = prompt(
    "Please choose a password length between 8 and 128 characters."
  );
  if (length < 8 || length > 128) {
    alert("Please choose an appropriate password length.");
    return;
  }
  var hasUpperCase = confirm("Would you like Upper-Case characters?");
  var hasLowerCase = confirm("Would you like Lower-Case characters?");
  var hasNumber = confirm("Would you like Numbers in your password?");
  var hasSpecial = confirm("Would you like Special-characters?");
  if (hasUpperCase === true) {
    passwordOptions = passwordOptions.concat(upperCase.split(""));
  }
  if (hasLowerCase === true) {
    passwordOptions = passwordOptions.concat(lowerCase.split(""));
  }
  if (hasNumber === true) {
    passwordOptions = passwordOptions.concat(number.split(""));
  }
  if (hasSpecial === true) {
    passwordOptions = passwordOptions.concat(special.split(""));
  }
  console.log(passwordOptions);
  for (let i = 0; i < length; i++) {
    finalPassword.push(
      passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
    );
  }
  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
