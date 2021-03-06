/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

console.log(typeof null);

let age = 26;
age = 27; // mutated the variable

const birthYear = 1995;
//const job;

var job = "programmer";
job = "teacher";

lastName ="Péter";
console.log(lastName);

// Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName =  'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); // concatenation

// Assignment operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 25 * 4 = 100
x /= 4; // X = x / 4 = 100 / 4 = 25
x ++; // x = x + 1 = 26
x --; // x = x - 1 = 25
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// TEMPLATE LITERALS
const firstName = 'Lajos';
const lastName = 'Péter';
const job = 'Project Manager';
const birthYear = 1995;
const currentYear = 2022;
const lajos = "I'm " + firstName + ', a ' + (currentYear-birthYear) + ' years old ' + job + '!';
console.log(lajos);

const lajosNew = `I'm ${firstName}, a ${currentYear-birthYear} years old ${job}!`;
console.log(lajosNew);

// Control structure
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license.');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too youg. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//Type conversion
const inputYear = '1995';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(typeof NaN);

console.log(String(23), 23);

//Type coercion
console.log('I am ' + 26 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');


//Falsy values:
//0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Lajos'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is undefined')
}

// strict equality operator
const age = 18;
if (age === 18) console.log('You just became an adult! (strict)');

// loose equality operator
if (age == 18) console.log('You just became an adult! (loose)');

const favourite = Number(prompt("What is your favourite number?"));
console.log(Number(favourite));

if (favourite === 23) {
    console.log('23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else {
    console.log('Number is not 7 or 23');
}

// different operator
if (favourite !== 23) {
    console.log('Why not 23?');
}
*/