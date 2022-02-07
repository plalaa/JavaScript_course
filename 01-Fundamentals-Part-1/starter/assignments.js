/* const country = 'Denmark';
const continent = 'Europe';
let population = 5825052;

console.log(country);
console.log(continent);
console.log(population);

console.log("\n");

const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log("\n");

language = 'Danish';

console.log(population / 2);
population ++;
console.log(population);

const populationFinland = 6000000;
console.log(population > populationFinland);

const avgPopulation = 33000000;
console.log(population < avgPopulation);

console.log(country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language);

console.log("\n");

*/

// CHALLENGE #1

// declaration of constants
const massOfMark = 78;
const heightOfMark = 1.69;

const massOfJohn = 92;
const heightOfJohn = 1.95;

// calculation of BMI
const bmiMark = massOfMark / heightOfMark ** 2;
const bmiJohn = massOfJohn / heightOfJohn ** 2;

// displaying the BMIs
console.log(bmiMark, bmiJohn);

// displaying if Mark has a higher BMI
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);