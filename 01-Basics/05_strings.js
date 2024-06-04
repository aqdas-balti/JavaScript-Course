const Name = "Aqdas";
let gitRepo = "12";
//This is a bad approach to concat the different string(old way)
console.log(
  "My name is " +
    Name +
    " and I have a github account, on my github " +
    gitRepo +
    " epos are created"
);
//This is a good approach and modern approach
console.log(
  `My name is ${Name} and I have a github account, on my github ${gitRepo} repos are created`
);

//Strings have their own functions that we can use in our code for accessing that methods we use the object of a string
let myStrings = new String("Aqdas-Ali");
console.log(myStrings);
console.log(typeof myStrings); //object
console.log(__proto__); //{}
//Now We are using the methods/functions of a strings
console.log(myStrings.length); //9
console.log(myStrings.charAt(2)); //d
console.log(myStrings.toLowerCase()); //aqdas-ali
console.log(typeof myStrings); //object
console.log(myStrings.toUpperCase()); //AQDAS-ALI
console.log(myStrings.indexOf("d")); //2
// console.log(myStrings.trim());
let newStrings = myStrings.substring(0, 5);
console.log(newStrings); //Aqdas
console.log(newStrings.slice(-6, 3)); //Aqd

let anotherString = myStrings.slice(-9, 5);
console.log(anotherString);

let newStringOne = "    Aqdas    ";
console.log(newStringOne);
console.log(newStringOne.trim());

let Url = "https://Aqdas.com//aqdas20%ali";
console.log(Url.replace("20%", "30%")); //https://Aqdas.com//aqdas30%ali
console.log(Url.includes("Aqdas")); //true
console.log(myStrings.split("-")); //[ 'Aqdas', 'Ali' ](Array)
