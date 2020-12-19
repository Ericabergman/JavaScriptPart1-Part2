/*
let js = "awsome";
if (js === "awsome") alert("JavaScript is the BEST!");
// alert will show in console
20 + 10;
// this wont show in consol or in browser
console.log(20 + 8 + 23 - 10);
// we need to tell javascript explicitly that it should print the
// output in the consol
let lesson = "first";
// declaring a variable and assigning a value
"Helena";
console.log("Helena NY");
console.log("Helena NY");
console.log("Helena NY");
console.log("Helena NY");
35;
console.log(35);
// we can just type value and not assigning it to a variable
// javascript wont give an error but this is not the convention and not
// efficient
let firstName = "Helena";
console.log(firstName);
// we declare a variable called firstName and then assign it a value of "Helena"
// we can then consol the variable that contains the value
// the output to the console will be "Helena"
let new = 22;
let function = 22;
// new, and function are reserved words in javascript and you can not
// use the declaring a variable
let name = "Helena";
// name is not reserved but its kinda reserved so it might cause problems
// if you use it - so dont!
let week1 = 45;
let week2 = 46;
// this is ok we declare two variables called week1 and week2
// but to be really clear and to make our code easier to read
let lastWeek = 45;
let currentWeek = 46;
// we can name them like this if its actually the current weel and last week
// this makes it more clear of what value our variables actually holds
let firstName;
// value of firstName is undefined
// its undefined because we only declared a variable we didnt assign a value to it
firstName = "Helena";
// now we assign a value to the variable and its no longer underfined instead its "Helena"
// DATA TYPES
// Boolean values
// a boolean can only be true or false, we use it to make descisions in our code
true;
console.log(true);
// boolean value
let youWillLearnJs = true;
console.log(youWillLearnJs);
// right way of decalring a boolean variable and assgning the value to true
youWillLearnJs = false;
// we change the value of our variable from true to false
console.log(youWillLearnJs);
// this time when we console log it it will return false
// we can use the built in operator typeof to know what data type our value is
// OBS!!!! DATA TYPE AND VALUE ARE NOT THE SAME
console.log(typeof "Helena"); 
// here the DATA TYPE is a string and the VALUE is "Helena"
console.log(typeof 35); // data typen number och värdet 35
// here the DATA TYPE is number and the VALUE is 35
console.log(typeof youWillLearnJs); // data type boolean och värdet false
// here the DATA TYPE is a boolean and the value is false
console.log("Helena"); 
console.log(35); 
console.log(youWillLearnJs);
// above we only log the value to the console we do not log what data type it is 
console.log(20 + 8 + 23 - 10);
// you can use operators to concatinate and subtract in javascript
// you can concatinate numbers aswell as strings
let firstName = 35;
//console.log(firstName);
let lastName = "Sara";
console.log(firstName);
console.log(lastName);
firstName = 20;
lastName = 35;
console.log(firstName);
console.log(lastName);
// above we are chaning the value of the two variables using the assignment operator =
let day;
console.log(day);
day = "Wedenesday";
console.log(day);
console.log(typeof null);
// typeof null is actually an error i javascript and will give you the result object
// which is not true at all because we learned earlier that null is one of the 7
// primitive values
// but it costs more to fix this than just leave it because of legacy reasons in javascript
// you will probably never encounbter this or use it at alla but now you know :)
// LET CONST VAR
// keywords that we use to declare varibles
// we use let to declare variables where the value might change in the future
// we use const when the value cant change
const me = "Helena";
//me = "Hej";
// the line abve will not run it will throw an exeption
//const birthYear = 1985;
// convention is to use const as much as you can and only use let in some cases where you really
// need to change the value later
// this will come natural to you as we go further in this course
// so from now on you use const and only use let when you really have to
var job = "developer";
// var is the old way of declarung variables and we will not use it
// it was used before es6
job = "teacher";
// you can change the value of a variable that is declared with var
// let and var are kinda like but underneath they really arent
// OPERATORS
// variety of different operators like mathematic, comparison, logical, assignment etc.. 
const birthYear = 2020 - 1985;
// assignment operator is the most common =
console.log(birthYear);
//const brothersAge = 2020 - 1991;
//console.log(brothersAge);
const now = 2020;
const myAge = now - 1985;
const brothersAge = now - 1991;
console.log(myAge, brothersAge);
// we can log both variables to the console separating them with a comma
console.log(myAge * 2, myAge / 10);
// we can use javascript to calculate stuff for us
console.log(myAge * 3, brothersAge);
let x = 10 + 5; // x = 15
console.log(x);
x += 10; // x = x + 10 value is now 25
console.log(x);
x *= 4; // x = * 4 = 100 value is now 100
console.log(x);
x++; // we increadse the value with 1 using the plus operator
console.log(x);
x--; // we decrease the value with one 
console.log(x);
*/

// const sarasAge = 15;

// const isFullAge = sarasAge >= 18;
// here we actually declare a boolean variable that contains the true or false
// depending on if sarasAge is higher than 18 or exactly 18
// the result here is then false since sarasAge is 15 as we declared above
// console.log(isFullAge);
// false
// console.log(typeof isFullAge);
// data type: boolean

// const now = 2020;
// console.log(now - 1991 > now - 1985);
// now we are asking javascript to determine if now (that has the value 2020) - 1991
// is bigger than now (2020) - 1985
// the result in the console is false since its not bigger
// but how does javascript know what to calculate first?
// More about that tomorrow :)

// let js = "awsome";
// if (js === "awsome") alert(" javascript is the best!");

// 20 + 10;

// console.log(20 + 8 + 23 - 10);

// let  lesson = "first";

// "Erica"
// console.log ("Erica NY");
// console.log ("Erica NY");
// console.log ("Erica NY");
// console.log ("Erica NY");

// 53

// let firstName camelcase

// firstname = veriabel

// string exempelvis= let  firstName = "erica";  always put then in quotes.

// boolin kan bara bli sant eller falskt

// declaring a veriabel and assigment a value let lesson = "first";

// hon vill att vi förklarat vår kod eller skriver kommerntar i vårt arbete / code för att öva

// 1. ge min veriabel ett namn
// 2. ge min veriabel ett

// operater=operatör

// true;
// console.log(true);

// let youwilllearnJs = true;
// console.log(youWilllearnJs);

// youWilllearnJs = false;
// console.log(youWilllearnJs);

// console.log(typeof "Erica"); // data typen och värdet Erica
// console.log(typeof 35); //data typen nummer och värdet 35
// console.log(typeof youWilllearnJs); // data typen boolean och värdet false

// console.log(typeof "Erica"); // data typen och värdet Erica
// console.log(typeof 35); //data typen nummer och värdet 35
// console.log(typeof youWilllearnJs); // data typen boolean och värdet false

// + är en operater och - är en operatöer används för att se ett spesicift resultat eller värde

// används för att andra värde på variabler.
// kan avnväda samma operatör för att ändra värde

// dynamiskt

// let firstName = "Erica";
// console.log(firstName);

// let firstName = "Sara";

// console.log(firstName);

// let firstName = 35;

// let lastName = "Bergman"

// let day; // declarerat en veriabel värdet=undefined
// console.log(day);

// day = "wensday"; //wensday anget värder tll veriabel
// console.log(day);

// //errors i javascript=buggar.finns buggar i mer eller mindre alla språk.  typeof bugg som inte blir rätt. det påverkar ingen men ändå bra att veta om

// console.log(typeof null); //ej ett objekt som consolen visar.

// prata om let

// LET CONST VAR
// som vi anväder för att deklarera en veriabel
// man vill bugga som code så säker som möjligt
// kan bli problem om man deklarerar sina veriabler let
// rutin att declarera våre veriabler med const och inte som let
// använd bara let om det är ett måste
// börja alltid med const och inte let

// declarere första cången
// let kan ändra värde senare
// med const kan man det inte
// använd framför atllt const men exempelvis födelseår ska inte var let

//best practise, använd cosnt

//VAR användes förr men inte längre
//var var det gamla sättet att deklare veriabler på

// vi ska förstå skillnade mellan let och const
// och när man använder vad
// det finns många olika operatörer

// const me  = "Erica";
// me = "Hej";

// const birthYear = 1994;

// nu ska co kolla på operatörer
// mathematic, compasison, logical, assigment etc.

//

// const birthYear = 2020 - 1985;
// console.log(birthYear);

// const brothersage = 2020 - 1991;
// console.log(brothersAge);

// const now = 2020;
// const myAge = now - 1985;
// const brothersAge = now - 1991;

// console.log(myAge > brothersAge);

// console.log(myAge, brothersAge);

// console.log(myAge * 2, myAge / 10)

// console.log(myAge * 3, brothersAge);

// let X = 10 + 5; // x= 15
// console.log(x);
// x +=10; // x = x + 10 värdet här är 25

// console.log(x);
// x *= 4; // x = * 4 = 100
// dynamiska konventerar automatiskt datattper. en string kan bli en booling

// const isFullAge = 15;

// const isFullAge = sarasAge >= 18;
// console.log(isFullAge);
// console.log(typeof isFullAge);

// const now = 2020;

// console.log(now - 1991 > now - 1985);

// 2020 - 1991 om resultatet är sörre än 2020 - 1989

//LESSON 2

//oporator precedence finns på github att kolla på
// högst värde utgors först
// lägst värde utgörs sist

// opreateringslista med värden.
// vi behöver bara veta vilken som har höre värde än den andra, inte varför det är så.
// behöver ha koll på vilken som konventraar först annars behöver vi iye memorera något

// exempel
// const now = 2020;
// const myAge = now - 1985
// const brothersAge = now - 1991
// console.log(now - 1991 > now -1985);

//- utförs först och förjer vänster till höger.

// let x, y;
// x = y = 25 - 10 -5; // x = y = 10
// console.log(x, y);
// // först 10 = y
// //värdet på y är = 10 x = y = 10

// detta är inget vi kommer att jobba med sedan. detta är bara för att illustrera för oss hur det fungerar.
// ett tips är att spara tabellen och kolla på vid behov.

//prioriterar operatörer (ordningen)  först

// räkna ut medelålder.

//const averageAge = (myAge + brothersAge) / 2;
//const averageAge = myAge + brothersAge / 2;
//console.log(myAge, averageAge);
//const averageAge

//veriabel har färg ljusblått
//strings och template literals

// "" eller ''  vi ska börja använda från och med nu

//const firstName = "Erica";
//const job = "Student"
//const birthYear = 1994;
//const now = 2020;

//const Erica = "i'm"

// template literals = ett sätt att skriva på
//const newErica = `i'm ${firstName}, a ${now - birthYear} years old ${job}`;
//   back ticks=(``) håll oss innanför backticksen
//const newErica = i'm `${firstName}`

//console.log(newErica);

// \n\ ny rad= backslash;

// const teacher = "Helena";
// const course = "JavaScript";
// const courseWeeks = 8;
// const currentWeeksFinished = 1;

// console.log `const = my ${teacher} is teaching me${course}. I have ${courseWeeks}, left${currentWeeksFinished}`;

// Ta beslut i vår kod TALKING DESICCION
// strukturera innan börja koda

// exempel: ta ta körkort eller inte.
// Tips: bryt ner saker i små delar
// 1. först behöver vi skapa en veriabel so innheåller värdet av en ålder
// 2. sedan behöver vi skapa en verabel för ålder tt ta körkort
// 3. jämföra om veriabel 1 är = eller högre än veriabel 2
// 4. ta beslut beroende på om beslutet är sant eller falskt

//isOfAgekolla om detta är sant
//if = om

//const age = 19;
//const isOfAge = age >= 18;

// if (isOfAge) {
//     console.log("YAY! you can take your drivers licens!!!");
// } else {
//     console.log("sorry come back in a few years!");
// }

//scope = declarera på rätt ställe
//innanför barckets lever bara innan för det ScopedCredentialinte utanför.
// {} = scope, variabler som är deklarerade innanför dessa lever endast där

// let century;
//  if (birthYear <= 2000) {

//      century = 20;
//  } else {

//      century = 21;
//  }
// console.log(century);

/*
const firstName = "Erica";
const job = "Student";
const birthYear = 1994;
const now = 2020;

const Erica = "i'm" 

const newErica = `i'm ${firstName}, a ${now - birthYear} years old ${job}`;

*/

// dynamiska värden = vi behöver inte tala om för javascript att vi ska konvertera

// TYPE COERSION & CONVERSION

// TYPE COERSION = manuellt
/*
const inputYear = '1993';    //'allt innanför'=string 
console.log(typeof inputYear);

console.log(inputYear + 15);

console.log(Number(inputYear) + 15);

console.log(String(25));


// CONVERSION = automatiskt
console.log("i am " + 35 + " years old");

console.log('23' - '10' - 3); // COERISON
console.log('a' - '10' - 3); 
console.log('23' + '10' + 3);// NO COERISON

console.log('23' > '18');
*/
/*
let n = '1' + 1; // 11
// jag tar 1 som är en sträng och skriver ut: 1 1 och lägger till nummer 1
n = n -1; // 10
console.log(n);
*/

/*
// THRUTHY & FALSE VALUES
// FINNS 5 FALSY VALUES: 0,'', undefined, NaN, null


// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Erica'));
// console.log(Boolean({})); 
*/
/*
const money = 0;

if (money) {
    console.log("Don´t spend it all!");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY! it´s defined");
} else {
    console.log("height is undefied");
}
*/

// EQUALITY OPERATORS
/*
const age = '18';
if (age === 18)console.log("you just became an adult!");
// 18 === 18

// 3 equal is strict will never use type coersion 
// 2 aqual does actually do type coersoin 

// '18' == 18 undvik 2 använd alltid strict annars blir det buggar. Undvik så mycket det bara går

const number = 25;
if (number !== 20)console.log("hejhej");
använd !==

*/

// TEORI Boolean Logic
//teoretiskt idag, kod imon

// first  assigment

// vi har 2 lag som ska tävla mot varandra. lagen kommer
// spela tre rundor. Laget med högsta poäng vinner!
// DATA OG: 96, 108, 89
// DATA ALLIANCE 88, 91, 110
// 1. RÄckna ut medelvärde för varje lag. plussa ihop varje lags resultat
// dela resultatet på 2
// 2. jämföra de båda lagens resultat för att jämföra vilket som är högst
// för att kunna jämföra resultaten behöver vi använda större operator
// vi behöver använda en if-sats som skreiver ut resultatet
// är vinnaren.

// steg 1: två variabler som inehåller varje lags data
// steg 1.1: skapa två nya veriabler som innehåller varje lags data
// steg 2: skapa en if-sats och avgöra vilket medelvärde som

//Gör detta först. gör en del i taget
// const result = 10 + 10 + 10; veriabler //är det med ljusblåt och döp dom beskrivande men kort och vettigt. //gör detta är bättre än att inte göra någon ting alls
// const result2 = 5 + 5 + 5; veriabler //gör detta är bättre än att inte göra någon ting alls

// const avrageResult = result / 2;
// const avrageResult2 = result2 / 2;

// Börja med att döpa veriabel med först const ellet let
// const sen veriabel
// let sen veriabel

// console.log(result, result2);
// console.log(avrageResultat, avrageResultat)

// if (avrageResult > avrageResult2) {
//     console.log("GRATTIS OG");
// } else {
//     console.log("Grattis ALLIANCE");
// }

// 1: först definera du vad du ska utföra
// 2: definerar du vilka steg rentkodmässigt du behöver genomföra
// 3: svriv ner vilken ordning du behöver utföra stegen.
// 4: till en början och kom tillbaka till det sen.

// Lektion

// Exersice week one
// let myName = "Erica";
// const myCity = "Ängelholm";
// const myAge = "26";
// const myBoyFriend = "Johan";
// console.log(myName, myCity, myAge, myBoyFriend);
// console.log(myName);
// console.log(myCity);
// console.log(myAge);
// console.log(myBoyFriend);

// let isOfLeagelAge = "26";

// const language = "svenska";

// console.log(isOfLeagelAge);

// console.log(isOfLeagelAge, myName, myAge);

// const language = "svenska";

// const myCity = "Ängelholm";
//----------------------------------------
// BASIC OPERATORS
// var myCity = 210655 + 1;
// const myCity = 210655 * 2;
// console.log(myCity);

/// var description =
// "gothenburg is a city in sweden and most of the 578 327 lining there speaks swedish";/
// console.log(description);
//-------------------------------------------
// STRINGS & TEMPLATE LITERALS
// var = "gothenburg is a city in sweden and most of the 578 327 lining there speaks swedish";/
let description =
  "gothenburg is a city in sweden and most of the 578 327 lining there speaks swedish";
// var description = `${description}`;
console.log(`gothenburg  is a big city, ${description}`);
