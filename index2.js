// Iteration 1: Names and Input
let hacker1= "Toni"
hacker1= "The driver's name is Toni";
console.log(hacker1);

let hacker2= "Alessandro"
hacker2= "The navigator's name is Alessandro";
console.log(hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else { console.log (`Wow, you both have equally long names, ${hacker2} characters!`);
}

// Iteration 3: Loops
//3.1
const driversName= "John";
let driversNameWithSpaces = "";
for(let i=0; i< driversName.length; i++){
    driversNameWithSpaces += driversName[i].toUpperCase() + " ";
}
console.log(driversNameWithSpaces);

//3.2
const word= "John";
let wordReversed= "";

for (let i= word.length -1; i>=0; i--) {
    const char= word[i];
    wordReversed+= char;
}
console.log(wordReversed);
//3.3
if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
}else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
}else {
    console.log(`What?! You both have the same name?`);
}




