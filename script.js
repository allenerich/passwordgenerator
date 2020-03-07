//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for character types to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page



// Assignment Code
var generateBtn = document.querySelector("#generate");
  
 


  var passwordLength = parseInt (prompt("How long does your password need to be (8-128 characters?)")) ;
            if (passwordLength >= 8 && passwordLength <=128) {

              var lowerCase = "abcdefghijklmnopqrstuvwxyz";

              var numbers = confirm("Do you want the password to include NUMBERS?");
                       if (numbers) {
                         numbers = "0123456789";
                       }
                       else {
                         alert("Password will not have numbers");
                         numbers = "";
                       }
          
            
              var symbols = confirm("Do you want the password to include SYMBOLS?");
                       if (symbols) {
                        symbols = "!@#$%^&*()_-+={[}]|\:;'<,>.?";
                       }
                       else {
                         alert("Password will not have symbols");
                         symbols = "";
                       }
              
              var upperCase = confirm ("Is the password CASE SENSITIVE?");
                        if (upperCase) {
                          upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                        }
                       else {
                         upperCase = lowerCase
                       }
              

            }
               else {
                  alert("Password Failed!")
               }
console.log(passwordLength)


function generatePassword(length = passwordLength) {
   
   var all = numbers + lowerCase + upperCase + symbols;

   var retValue= "";


   for (var i = 0; i < length; i++) {
     var character = Math.floor(Math.random() * all.length);
        retValue += all.substring(character, character + 1);
   }

   return retValue;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//clipboard//



function savePassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the Password: " + copyText.value);
}

