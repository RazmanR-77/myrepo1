// index.js


// /passwordStrength
var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

// [].filter(  (), => {

// }

// )

// password generator

const passwordBox = document.getElementById("password");
const length = 12;
const uppercase = "ABCDEFGHIJ  XYZ";
const lowercase = uppercase.toLowerCase();
const number = "1234567890";
const symbols = "!@#$%^&*()-=[]{}\;',./?<>";

const allchars = uppercase + lowercase +
    number + symbols;



let listFruits = ["water", "banana", "apple", "durian"];
for (const fruit of listFruits) {
    console.log(fruit);

}

// call   fibonacci Series ;
htmlOutput = getFruits();

// print to HTML web page
console.log(htmlOutput);
params.output = htmlOutput;
getOutputHtml("", params);


// createPassword();

// passwordStrength();
// END MAINNN


function createPassword() {
    let password = "";

    // select all values randomly mathematically 
    password += uppercase[
        Math.floor(Math.random() * uppercase.length)];
    password += lowercase[
        Math.floor(Math.random() * lowercase.length)];

    password += number[
        Math.floor(Math.random() * number.length)];
    password += symbols[
        Math.floor(Math.random() * symbols.length)];


    while (length > password.length) {

        password += allchars[Math.floor(Math.random() * allchars.length)];
        passwordBox.value = password;

    }


}





function passwordStrength() {
    pass.addEventListener("input", () => {


        if (pass.value.length > 0) {
            msg.style.display = "block";
        }
        else {

            msg.style.display = "none";
        }

        if (pass.value.length < 4) {
            str.innerHTML = "weak";
            pass.style.borderColor = "red";
            msg.style.color = "red";
            // msg.style.display = "block";
        }
        else if (pass.value.length >= 4 &&
            pass.value.length < 8) {
            str.innerHTML = "medium";
            pass.style.borderColor = "yellow";
            msg.style.color = "yellow";
            // msg.style.display = "block";
        }

        else if (pass.value.length >= 8) {
            str.innerHTML = "strong";
            pass.style.borderColor = "green";
            msg.style.color = "green";
            // msg.style.display = "block";
        }


    });
}

