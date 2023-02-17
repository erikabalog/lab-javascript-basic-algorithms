// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops


function checkNames (driverName, navigatorName)
{
  let hacker1;
  hacker1 = "The driver's name is " + driverName;
  console.log (hacker1);
  let lenght1 = hacker1.length;

  let hacker2;
  hacker2 = "The navigator's name is " + navigatorName;
  console.log (hacker2);
  
  let response;
  
  if (hacker1.length > hacker2.legth)
    {
      response = "The driver has the longest name, it has XX characters.";
    }
  else if (hacker1.length < hacker2.legth)
    {
      response = "It seems that the navigator has the longest name, it has XX characters.";
    }
  else
    {
      response = "Wow, you both have equally long names, XX characters!";
    }

  return response;
}

let x = "J o h n";
console.log(x.toUpperCase()); 
const word= "John";

let wordReversed = "";
for(let i = word.length -1; i>=0; i--)
{
  const char = word[i];
  wordReversed+= char;
}
console.log(wordReversed);


const text1 = "The driver's name goes first.";
     console.log(text1);

  const text2 = "Yo, the navigator goes first definitely.";
     console.log(text2);

  const text3 = "What?! You both have the same name?";
     console.log(text3);

let inputArr = [text1, text2, text3];
let outputArr = inputArr.sort();
console.log(outputArr);

//Have created an sentence array to use in the paragraphs
const sentence= 
[
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
];

//function to generate the paragraphs
function generateParagraph()
{
  const numSentences = Math.floor(Math.random() *3) +3;
  let paragraph = "";
  for(let i=0; i< numSentences; i++) 
  {
  const randomIndex = Math.floor(Math.random() * sentence.length);
  paragraph += sentence[randomIndex] + " ";
  }

  return paragraph;
}

//Store the 3 paragraphs in the variable called longText
let longText = "";
for(let i =0; i<3; i++)
{
longText +=generateParagraph() + "\n\n";
}
console.log(longText);


const myString = sentence.toString();
const wordCount = myString.split(" ").length;
console.log(`Word count: ${wordCount}`);

const targetWord = "et";
const worldCount = myString.split(targetWord).lenght -1;
console.log(`World count: ${worldCount}`);

let phraseToCheck = "value";
function isPalindrome(value)
{
  const valueStr = String(value);
  const reverseStr = valueStr.split("").reverse().join("");
  if (valueStr === reverseStr)
    {
      return true;
    } 
  else
    {
      return false;
    }
}
const value = "A man, a plan, a canal, Panama!";
if(isPalindrome(value))
  {
    console.log(`${value} is a palindrome`);
  }
else
  {
    console.log(`${value} is not a palidrome`);
  }


