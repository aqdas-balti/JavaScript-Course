//Numbers objects and its different methods
const score = 400;
console.log(score);
console.log(typeof score); //number

//Here we are using the objects of the number for using the different properties of a number
const newScore = new Number(500); //This is the main  of a Number Object
console.log(newScore); //[Number: 500]
console.log(__proto__); //{}
console.log(typeof newScore); //object

//convert this number into a string datatype
console.log(newScore.toString()); //500
console.log(newScore.toString().length); //3
console.log(newScore.toFixed(2)); //500.00

const otherScore1 = 24.57028;
console.log(otherScore1.toPrecision(4)); //24.57
console.log(otherScore1.toPrecision(3)); //24.6
console.log(otherScore1.toPrecision(2)); //25

const otherScore2 = 244.57028;
console.log(otherScore2.toPrecision(2)); //2.4e+2(2.4 and other in exponential form of e power 2)
console.log(otherScore2.toPrecision(1)); //2e+2
console.log(otherScore2.toPrecision(3)); //245
console.log(otherScore2.toPrecision(4)); //244.6

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); //10,000,000(Its help us to read a number in better readable form)

//++++++++++++++++++++Maths+++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-5)); //5 (absolute value alway delayer result in the positive manner)
console.log(Math.round(5.5678)); //6
console.log(Math.ceil(6.2)); //7 (It is ceiling means if the no is minor grater than the actual no then round upper to the actual no)
console.log(Math.floor(5.9)); //5 it takes lower value if the no after point is grater than 5 or not
console.log(Math.min(4, 3, 5, 1, 6)); //1
console.log(Math.max(4, 3, 5, 1, 6)); //6

console.log(Math.random()); //In this no will be always in between 0 and 1 like 0.1 0.2 etc no must be random in every execution
console.log(Math.random() * 10); //Using multiple of 10 shifted to the left sin=de like 0.1223 to 1.0232 etc
console.log(Math.random() * 10 + 1); //This is the right and formal way no 0 does not appear in the result
console.log(Math.floor(Math.random() * 10) + 1); //it takes the min value

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
