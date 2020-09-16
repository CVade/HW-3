var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var symbolArr = ['!', '#', '@', '$', '%', '&', '^', '*']

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var checkLowercase = false
  var checkUppercase = false
  var checkNumbers = false
  var checkSymbols = false
  var passwordArr = []
  
  var characterCount = parseInt(prompt("How many characters do you want?"))
  
  while(!checkLowercase && !checkUppercase && !checkNumbers && !checkSymbols){
  checkLowercase = confirm ("Do you want lowercase letters?")
  checkUppercase = confirm ("Do you want uppercase letters?")
  checkNumbers = confirm ("Do you want numbers?")
  checkSymbols = confirm ("Do you want symbols?")
}
  if (checkLowercase) {
    for(var i = 0; i < lowerArr.length; i++){passwordArr.push(lowerArr[i])}
  }

  if (checkUppercase) {
    for(var i = 0; i < upperArr.length; i++){passwordArr.push(upperArr[i])}
  }

  if (checkNumbers) {
    for(var i = 0; i < numberArr.length; i++){passwordArr.push(numberArr[i])}
  }

  if (checkSymbols) {
    for(var i = 0; i < symbolArr.length; i++){passwordArr.push(symbolArr[i])}
  }
  
  var pwd = ""
    for(var i = 0; i < characterCount; i++){pwd += passwordArr[Math.floor(Math.random()*passwordArr.length)]}

  return pwd
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
