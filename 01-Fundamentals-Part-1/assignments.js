/*const country = 'Denmark';
const continent = 'Europe';
let population = 5825052;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = true;

let language;
language = 'Danish';
//console.log(typeof isIsland);
//console.log(typeof population);
//console.log(typeof country);
//console.log(typeof language);

console.log(population / 2);
population++;
population--;
console.log(population);

const populationFinland = 6000000;
console.log(population > populationFinland);

const avgPopulation = 33000000;
console.log(population < avgPopulation);

// Using concatenation
console.log(country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language);

// Using template literals
console.log(`${country} is in ${continent}. and its ${population} people speak ${language}`);
console.log("\n");

if (population > avgPopulation) {
    console.log(`${country}'s population is above average.`)
} else {
    const populationDiff = avgPopulation - population;
    console.log(`${country}'s population is ${populationDiff} below average`);
}

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

// CHALLENGE #2

if (markHigherBMI) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}
*/

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else console.log('No borders');