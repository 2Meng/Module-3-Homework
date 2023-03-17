var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "="]
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function passwordOptions(){
  var length = promt("How many characters would you like in your password?")

  if (Number.isNaN(length)){
    alert("Please provide a number.")
    return null
  }

  if (length < 8) {
    alert("Password must be at least 8 characters.")
    return null
  }

  if (length > 28) {
    alert("Password can not be more than 28 characters.")
  }

  var useSpecialCharacters = confirm ("Click the OK button to include special characters.")
  var useNumberCharacters = confirm ("Click the OK button to include special characters.")
  var useLowerCaseLetters = confirm ("Click the OK button to include lower case letters.")
  var useUpperCaseLetters = confirm ("Click the OK button to include upper case letters.")

  if (useSpecialCharacters === false && useNumberCharacters === false && useLowerCaseLetters === false && useUpperCaseLetters === false) {
    alert("Please choose AT LEAST ONE character type.")
    return null
  }

  var usersPassword = {
    length: length,
    useSpecialCharacters: useSpecialCharacters,
    useNumberCharacters: useNumberCharacters,
    useLowerCaseLetters: useLowerCaseLetters,
    useUpperCaseLetters: useUpperCaseLetters,
  }

  return usersPassword
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
