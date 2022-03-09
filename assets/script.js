// arrays including the charecters to go into the password 
let numbers = "0123456789";
let special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let lowercase = "acdefghijklnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allCharecters = "";
let length = "";


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);