//Exercise 1: Rounding Numbers

const num1 = 4.789;
const num2 = 12.345;
const num3 = -8.5;

const floor1 = Math.ceil(4.789);
const floor2 = Math.floor(12.345);
const floor3 = Math.ceil(-8.5);

console.log(floor1);
console.log(floor2);
console.log(floor3);

//Exercise 2: Finding Min and Max

const numberSet = [14, 2, -5, 101, 35, 8];

const max = Math.max(14, 2, -5, 101, 35, 8);
const min = Math.min(14, 2, -5, 101, 35, 8);

console.log(max);
console.log(min);

//Exercise 3: Powers and Square Roots

const base = 5;
const exponent = 3;
const numberForSqrt = 64;

const baseExpo = Math.pow(5, 3);
const squareRoots = Math.sqrt(64);

console.log(baseExpo);
console.log(squareRoots);

//Exercise 4: Random Numbers
const rand1 = Math.random();
const rand2 = Math.floor(Math.random() * 11);

console.log(rand1);
console.log(rand2);

//Exercise 5: Practical Application – Circle Calculations

const radius = 7;

const area = Math.PI * Math.pow(7, 2);
const roundedArea = parseFloat(area.toFixed(2));

console.log(area);
console.log(roundedArea);
