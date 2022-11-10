var characterLength = 8;
var choiceArray = [];

var specialCharArr = ['!', '@', '#', '$', '%', '&', '*', '?', '-', '{', '}', ];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['0','1','2','3','4','5','6','7','8','9',];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
  
      if(correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = newPassword;
      } else {
          passwordtest.value = "";
  
      }
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    var password = "";
    for(var i = 0; i < characterLength; i++){
        var randomIndex = Math.floor(Math.random() * choiceArray.length)
        password = password + choiceArray[randomIndex];
    }
    return password;
}


function getPrompts(){
    choiceArray = [];

    characterLength = parseInt(prompt("How many characters do you want?(8 - 128 characters)")); 
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character length has to be a length of 8 - 128 characters. Please try again");
        return false;
    }
        if (confirm("Lower case letters included?")){
            choiceArray = choiceArray.concat(lowerCaseArr);
        }
    
        if (confirm("Upper case letters included?")){
            choiceArray = choiceArray.concat(upperCaseArr)
        }
    
        if (confirm("Special characters included?")) {
            choiceArray = choiceArray.concat(specialCharArr)
        }
    
        if (confirm("Numbers included?")){
            choiceArray = choiceArray.concat(numberArr)
        }
        return true;    
    }