// //Arrays
// const myHeros1 = ["Solemani", "Jihad", "Immad", "Chamran"];
// const myHeros2 = ["Mustafa", "Murtaza", "Khomeni", "Khamenai"];
// myHeros1.push(myHeros2);
// console.log(
//   myHeros1
// ); /*['Solemani','Jihad','Immad','Chamran', [ 'Mustafa', 'Murtaza', 'Khomeni', 'Khamenai' ]] Here the myHero2 array is a 4th element in it when we push in it, the actual myHeros1 will now new array (This is a problematic situation)*/
// console.log(myHeros2); //[ 'Mustafa', 'Murtaza', 'Khomeni', 'Khamenai' ]
// console.log(myHeros1[4]); //[ 'Mustafa', 'Murtaza', 'Khomeni', 'Khamenai' ]
// console.log(myHeros1[4][1]); // Murtaza

// console.log(
//   "***********************Below Using Concat Method****************************"
// );
// //To avoid the upper scenario we use concat and spread method
// const myHeros3 = ["Solemani", "Jihad", "Immad", "Chamran"];
// const myHeros4 = ["Mustafa", "Murtaza", "Khomeni", "Khamenai"];
// const allHeros = myHeros3.concat(myHeros4);
// console.log(allHeros); //['Solemani','Jihad','Immad','Chamran','Mustafa', 'Murtaza', 'Khomeni', 'Khamenai' ]

// console.log(
//   "************************Below Using Spread Method***************************"
// );
// const myHeros5 = ["Solemani", "Jihad", "Immad", "Chamran"];
// const myHeros6 = ["Mustafa", "Murtaza", "Khomeni", "Khamenai"];
// const allHeros2 = [...myHeros5, ...myHeros6];
// console.log(allHeros2); //['Solemani','Jihad','Immad','Chamran','Mustafa', 'Murtaza', 'Khomeni', 'Khamenai' ]

console.log(
  "**************************Array With In Array**************************"
);
const anOtherArray = [1, 3, 4, [5, 6, 7], 8, 9, [10, 11]];
const realArray = anOtherArray.flat(Infinity);
console.log(realArray); //[1, 3, 4,  5,  6,7, 8, 9, 10, 11]
console.log(
  "**************************Convert any datatype into Array With From**************************"
);
console.log(Array.isArray("Aqdas")); //false
//If I convert it into array
console.log(Array.from("Aqdas")); //[ 'A', 'q', 'd', 'a', 's' ]

console.log(Array.from({ name: "Aqdas" })); //[](This is object of key and value pair you must tell the compiler to extract the data) Very important about interview
//Another way to convert array
console.log(
  "**************************Convert any datatype into Array With of**************************"
);
console.log(Array.of("Aqdas")); //[ 'Aqdas' ]

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
