// chapter 20 ###
// 1=== Write a nested for loop to generate all combinations of two arrays: firstNames = ["Lil", "Big"] and lastNames = ["Zzz", "Boom"].

// let firtname = [ "Lil", "big"]
// let lastname = [ "Zzz", "Boom"]

// for (let i = 0; i < firtname.length; i++) {
//     for (let j = 0; j < lastname.length; j++) {
//         console.log(firtname[i] + " " + lastname[j]);
//     }
// }

// 2==== Explain how many times the inner loop runs if the outer loop runs 3 times and the inner loop runs 2 times.

// answer= 
// Outer loop 3 Time
// inner loop 2 Time
// total = 3 x 2 = 6

// inner loop 6 baar chale Ga .

// 3==== Modify the nested loop to only generate names where both indexes are not the same.


let firtname = ["Lil", "big"];
let lastname = ["Zzz", "Boom"];

for (let i = 0; i < firtname.length; i++) {
    for (let j = 0; j < lastname.length; j++) {
        if ( i !== j) {
            console.log(firtname[i] + " " + lastname[j]);
        }
    }
}

 // Chapter 21 – Changing case
// Write a program to convert a user’s input into lowercase and display it.

let userinput = prompt ("type your Answer")
let lowerCaseinput = userinput.toLowerCase()

console.log( "LowerCase: " + lowerCaseinput )

// Use toUpperCase() to normalize city names before comparison

let city = prompt ( "Karachi" )
let normalizeCity = city.toUpperCase()

if (normalizeCity === "KARACHI" ) {
    console.log ("KARACHI!")
} else {
    console.log( " City not Recognized")
}

// Explain the importance of changing case in user input validation.

// Log input alag alag style mai likhte hen 
// "karachi" "KARACHI" "Karachi".

// Agar hum case normalize use na karen ,
// to match karna mushkil ho jata he. 

// toUpperCase() ya lowerCase() use kar k 
// Comparison easy aur Accurate ban jata he.


// Chapter 22 – Strings: measuring length and extracting parts
// Write a script to extract the first 5 characters from the string "JavaScriptRocks".

let str =  "JavaScriptRocks"
let firstFive = str.slice(0,5)

console.log("First 5 Character: " + firstFive)

// Get the last character of any user-provided string.

let Userinput = prompt ( "type any words")
let lastchart = Userinput.charAt (Userinput.length-1)

console.log("last Character:" + lastchart )


// Ask the user to input their full name and display the length of the input.

let fullname = prompt ("SUFYAN" )
let namelenght = fullname.length

console.log("Namelength :" + namelenght)

// Chapter 23 – Strings: finding segments
// Use indexOf to find the position of “dog” in "The lazy dog sleeps.".

let sentence = "the lazy dog sleeps";
let position = sentence.indexOf("dog")

console.log( "positionof `dog`: " + position )


// Write a script that checks if the word “hello” exists in user input.

let UserInput = prompt ( " type something:" )
if (UserInput.toLowerCase().indexOf("hello")!==-1){
    console.log("the word `hello` existsin your input");
} else {
    console.log("the word `hello` was not found.")
}

// How does indexOf behave if the string isn’t found?

// answer indexof return -1 if the string is not found in the Text . 

// example

"the lazy dog sleeps.".indexOf("cat");

// Chapter 24 – Strings: finding a character at a location
// Write a script to find the character at position 4 in the word “JavaScript”.

let word = "JavaScript"
let char = word.charAt(4)

console.log("character of position 4:" + char)

// Ask a user for a string and a position; return the character at that position.

let userStr = prompt("type the word")
let Position = prompt("type the Position (number): ")

let character = userStr.charAt(Position)
console.log("character of position" + Position + " :" + character   
)

// What happens when the index is out of bounds? Test it.

let Word = " JavaScript"
let Char = word.charAt(100)

console.log(Char)

// Chapter 25 – Strings: replacing characters
// Replace the word “bad” with “good” in the string "This is a bad example.".

let Sentence = "this is a bad example."
let update = Sentence.replace("bad","good")

console.log(update)

// Replace all instances of "JS" with "JavaScript" in a given sentence.

let text = "JS is cool. i love JS!";
let replaceText = text.replace(/JS/g, "JavaScript")

console.log(replaceText)

// Use replace() to customize a template message like "Hello, NAME".

let template = "Hello,NAME!";
let customMessage = template.replace("NAME", "SUFYAN")
console.log(customMessage)

// Chapter 26 – Rounding numbers
// Demonstrate rounding 2.6 using Math.round, Math.floor, and Math.ceil.

let num = 2.6;

console.log("math.round(2.6):" + Math.round(num));
console.log("math.floor(2.6):" + Math.floor(num));
console.log("math.ceil(2.6):" + Math.ceil(num));

// Ask the user to input a number and round it to the nearest integer.

let useriput = prompt ("type any number")
let round = Math.round(Number(userinput));

console.log("Rounded value:" + round);

// Compare Math.floor(-2.9) and Math.ceil(-2.9). Explain the difference.

console.log("Math.floor(-2.9):"+ Math.floor(-2.9))
console.log("Math.ceil(-2.9):"+ Math.ceil(-2.9))

// Chapter 27 – Generating random numbers
// Generate a random number between 1 and 6 (like a dice roll).

let dice = Math.floor(Math.random()* 6)+1;
console.log( "dice roll:" + dice)

// Write a coin toss simulator using Math.random().

let toss = Math.random();
let result = toss < 0.5 ? "Head": "Tail";

console.log("Coin toss:" + result)

// Simulate a random password generator that picks a number between 1000 and 9999.

let password = Math.floor(Math.random()* 9000) + 1000;

console.log("Random 4 digits password:" + password)

// Chapter 28 – Converting strings to integers and decimals
// Convert the string "45.67" to a float and log it.

let Str = "45.67";
let Num = parseFloat(Str)

console.log("float value:" + Num)


// Parse an integer from the string "123px". What’s the result?

let value = parseInt("123px")

console.log("Parsed integer:", value)

// What happens when you try to parse "abc" to an integer?

let Result = parseInt("abc")

console.log("Result:" , Result)

// Chapter 29 – Converting strings to numbers, numbers to strings
// Convert a number to a string and show its type using typeof.

let nuM = 123;
let sTr = nuM.toString()

console.log("value:", sTr)
console.log("type:",typeof sTr)

// Convert the string "2025" to a number and add 10.

let yearStr = "2025"
let yearNum = Number(yearStr)

let rEsult = yearNum + 10 ;

console.log("Result",rEsult)


// Explain the difference between parseInt and Number() using examples.
 let val1 = parseInt ("123abc");
 let val2 = Number ("123abc");

 let val3 = parseInt("45.67")
 let val4 = Number("46.67")


//  Chapter 30 – Controlling the length of decimals
// Use .toFixed(2) to display only 2 decimal places of 123.45678.

let nUm = 123.45678;
let fixed = nUm.toFixed(2);

console.log("Rounded to 2 decimals:" , fixed)


//How would you convert "12.999" to a number and round it to 1 decimal?

let stR = "12.999";
let NUm = Number(stR)
let rounded = NUm.toFixed(1);

console.log("Rounded to 1 decimal!", rounded);

//Ask the user to input a decimal and display it rounded to 3 decimal places.

let userinPUT = prompt("type any decimal number");
let number = Number(userinPUT);
let rounDed = number.toFixed(3);

console.log("Rounded to 3 decimals:", rounDed)


// Chapter 31 – Getting the current date and time
// Write a script to display the current date and time using new Date().

let currentDate = new Date ();
console.log("Current date and time:" , currentDate)


// Extract and display only the year from the current date.

let now = new Date ();
let year = now.getFullYear();

console.log("current year:",year)

// Display a greeting based on current time (AM/PM).

let Now = new Date ();
let hours = now.getHours();

if(hours < 12){
    console.log("Good Morning!")

} else if (hours < 18) {
console.log ("Good Afternoon!")

} else {
    console.log("Good Evening")
}

// Chapter 32 – Extracting parts of the date and time
// Display the current day, month, and year separately.

let noW = new Date ()

let day = now.getDate();
let month = now.getMonth()+1;
let Year = now.getFullYear();

console.log("Day:",day)
console.log("Month:",month)
console.log("Year:",Year)


// Extract the hours and minutes from the current time.

let nOW = new Date();

let Hours = now.getHours();
let minutes = now.getMinutes();

console.log("Hours:", Hours)
console.log( "minutes:", minutes)

// Create a digital clock format like "13:45" using Date object methods.

let NoW = new Date ();

let h = NoW.getHours()
let m = NoW.getMinutes()

if (m < 10){
    m = "0" + m ;
}

let clock = h + ":" + m;
console.log("digital Clock:", clock)

// COMPLETE
