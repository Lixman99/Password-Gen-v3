// Assignment code here
var passwordLength;


var confirmUpper;


var confirmLower;


var confirmNumber;


var confirmSpecial;


var special = [",", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U ", "V", "W", "X", "Y", "Z",]



////Step 1///
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);




////Step 2///
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

function generatePassword() {
  passwordLength = parseInt(prompt("The length of the password? Choose between 8 and 128"));
  console.log("Password length " + typeof passwordLength);
  if (!passwordLength) {
    alert("Required value");
    return generatePassword()
    ////Step 3///
    //WHEN prompted for the length of the password
    //THEN I choose a length of at least 8 characters and no more than 128 characters

  } else if (passwordLength < 8 && passwordLength > 128) {
    alert("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
    return generatePassword()
  } else {
    var confirmLower = confirm("Do you want lower cases?");
    console.log("Lower case " + confirmLower);
    var confirmUpper = confirm("Do you want upper cases?");
    console.log("Upper case " + confirmUpper);
    var confirmNumber = confirm("Do you want numbers?");
    console.log("Number " + confirmNumber);
    var confirmSpecial = confirm("Do you want special cases for more security?");
    console.log("Special Character " + confirmSpecial);
  };
  //possible choices
  var possiblechoices = []
  if (confirmLower) {
    possiblechoices = possiblechoices.concat(lower)
  }
  if (confirmUpper) {
    possiblechoices = possiblechoices.concat(upper)
  }
  if (confirmSpecial) {
    possiblechoices = possiblechoices.concat(special)
  }
  if (confirmNumber) {
    possiblechoices = possiblechoices.concat(number)
  }
  console.log(possiblechoices)

  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomindex = Math.floor(Math.random() * possiblechoices.length)
    console.log(randomindex)
    var randomcaracter = possiblechoices[randomindex]
    console.log(randomcaracter)
    password += randomcaracter
  }

  return password
}
// "string" true false {key: "value", another: true} ["one","two",1,2,] a loo

////Step 4///
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//pushing thing (element )sure array , conditionnal method ,boellem


////Step 5///
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

////Step 6///
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria




////Step 7 ///
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

