// arrays including the charecters to go into the password 
let numbers = "0123456789";
let special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let lowercase = "acdefghijklnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allCharecters = "";
let length = "";


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

function createPassword() {
    let passwordLengthPrompt = Number(prompt("Pick a password that is 8 to 128 characters long."));
    //if password doesnt meet the requirments then you send them an alert and redo the function
    if (!passwordLengthPrompt || passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
      alert("please type another passowrd! Remeber the passowrd needs to be from 8 to 128 cahrecters long!");
      createPassword();
    }
    //if the password meets the requirments then add a number to the length variable.
    else {
        length += passwordLengthPrompt;
    }

    //promts for the user to specify what they want 
    let addLowercase = window.confirm("Do you want to include lowercase letters?");
    let addUppercase = window.confirm("Do you wwant to include uppercase letters?");
    let addNumbers = window.confirm("Do you want to include numbers?");
    let addSpecial = window.confirm("Do you want to include special characters?");

//dependig on what they choose the ifs will add that variable to there password

    if (addLowercase) { allCharacters += lowercase;}
      
    if (addUppercase) { allCharacters += uppercase;}
      
    if (addNumbers) {allCharacters += numbers;}
      
    if (addSpecial) {allCharacters += special;}
      
    if (!allCharacters) {alert("Please select at least one character type!");writePassword();
      }

    