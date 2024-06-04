//Arrays
const myHeros1 = ["Solemani", "Jihad", "Immad", "Chamran"];
const myHeros2 = ["Mustafa", "Murtaza", "Khomeni", "Khamenai"];
myHeros1.push(myHeros2);
console.log(
  myHeros1
); /*['Solemani','Jihad','Immad','Chamran', [ 'Mustafa', 'Murtaza', 'Khomeni', 'Khamenai' ]] Here the myHero2 array is a 4th element in it when we push in it, the actual myHeros1 will now new array (This is a problematic situation)*/
console.log(myHeros2); //[ 'Mustafa', 'Murtaza', 'Khomeni', 'Khamenai' ]
console.log(myHeros1[4]); //[ 'Mustafa', 'Murtaza', 'Khomeni', 'Khamenai' ]
console.log(myHeros1[4][1]); // Murtaza

console.log(
  "***********************Below Using Concat Method****************************"
);
//To avoid the upper scenario we use concat and spread method
const myHeros3 = ["Solemani", "Jihad", "Immad", "Chamran"];
const myHeros4 = ["Mustafa", "Murtaza", "Khomeni", "Khamenai"];
const allHeros = myHeros3.concat(myHeros4);
console.log(allHeros); //['Solemani','Jihad','Immad','Chamran','Mustafa', 'Murtaza', 'Khomeni', 'Khamenai' ]

console.log(
  "************************Below Using Spread Method***************************"
);
const myHeros5 = ["Solemani", "Jihad", "Immad", "Chamran"];
const myHeros6 = ["Mustafa", "Murtaza", "Khomeni", "Khamenai"];
const allHeros2 = [...myHeros5, ...myHeros6];
console.log(allHeros2); //['Solemani','Jihad','Immad','Chamran','Mustafa', 'Murtaza', 'Khomeni', 'Khamenai' ]
