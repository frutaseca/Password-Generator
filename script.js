var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

var specialCharacters = "%&'!]^_$|}~()*#+,-/:;<=>?@[";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    password.value === "";
    var randomString = "";

    var lowcase = confirm("Do you want your password to contain lowercase letters?");
    var uppcase = confirm("Do you want your password to contain uppercase letters?");
    var num = confirm("Do you want your password to contain numbers?");
    var specialChar = confirm("Do you want your password to contain special characters?");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    } else if (lowcase === false && uppcase === false && num === false && specialChar === false) {
        alert("You must chose at least one password criteria.");
        var lowcase = confirm("Do you want your password to contain lowercase letters?");
        var uppcase = confirm("Do you want your password to contain uppercase letters?");
        var num = confirm("Do you want your password to contain numbers?");
        var specialChar = confirm("Do you want your password to contain special characters?");
    }

    if (lowcase) {
        optionsVariable += lowercase;
    }

    if (uppcase) {
        optionsVariable += uppercase;
    }

    if (num) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

    for (var i = 0; i < passwordLength; i++) {
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;
}