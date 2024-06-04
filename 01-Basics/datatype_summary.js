// /*The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.
//There are 7 primitive data types:string,number,bigint,boolean,undefined,symbol,null */
console.log("7 primitive data types are:");
const Marks = 10;
console.log(typeof Marks); //number
const Name = "Aqdas";
console.log(typeof Name); //string
let number_bigint = 1212312322131n;
console.log(typeof number_bigint); //bigint
let boolean_Value = false;
console.log(typeof boolean_Value); //boolean
let null_Val = null;
console.log(typeof null_Val); //object
let Nothing;
console.log(typeof Nothing); //undefined
let Id = Symbol("121");
let anotherId = Symbol("121");
console.log(typeof Id); //function
console.log(Id === anotherId); //false
console.table([
  Marks,
  typeof Marks,
  Name,
  typeof Name,
  number_bigint,
  typeof number_bigint,
  boolean_Value,
  typeof boolean_Value,
  null_Val,
  typeof null_Val,
  Nothing,
  typeof Nothing,
  Id,
  typeof Id,
]);

/*The data types that are derived from primitive data types of the JavaScript language are known as
  non-primitive data types. It is also known as derived data types or reference data types.
  Below is a list of Non-primitive data types. Array,Objects and Functions*/
//Array:
const heros = new Array(
  "Ammad Mugniya",
  "Jihad Mugniya",
  "Qasid Solemani",
  "Abu Mehdi al Muhandis"
);
console.log(heros);
console.log(typeof heros); //Array
//Object:
let obj = {
  Name: "Aqdas Ali",
  Age: 22,
  Department: "BSCS",
};
console.log(obj);
console.log(typeof obj); //object
//Function:
let myFunction = function () {
  console.log("Hello World!");
};
console.log(myFunction);
console.log(typeof myFunction); //function(Its Called Object Function)
//https://262.ecma-international.org/5.1/#sec-11.4.3 (For Study Purpose link)

/*In JavaScript, primitive values (such as numbers, strings, booleans, etc.) are stored in the stack, while objects (such as arrays, functions, etc.) are stored in the heap. Primitive values are immutable and have a fixed size, so they can be easily stored and accessed in the stack.
Stack(Primitive) and Heap (Non-Primitive) */

let myName = "Aqdas Ali";
let newName = myName;
console.log(newName); //Aqdas Ali
console.log(myName); //Aqdas Ali
newName = "Aqdas Ali Balti";
console.log(newName); //Aqdas Ali Balti
console.log(myName); //Aqdas Ali

let personOne = {
  Name: "Anwar",
  Age: 24,
  Dept: "BSCS",
};
console.log("Actual Object", personOne);
let personTwo = personOne;
console.log("Reference Object", personTwo);
personTwo.Name = "Aqdas";
personTwo.Age = 22;
console.log("After Changings in Objects", personTwo); //Changing in 2nd object is apply in all the variables
console.log("After Changings in Object", personOne);
