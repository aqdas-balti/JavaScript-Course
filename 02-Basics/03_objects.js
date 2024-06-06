//Singleton
//object.create
//Object Literals

const object = {
  name: "Aqdas",
  Age: 22,
  Email: "aqdasali584@gmail.com",
  Location: "Islamabad",
  isLoggedIn: true,
  lastLoggedIn: ["Monday", "Tuesday"],
};
console.log(object.name); //Aqdas (But this is not a good way to accessing the data ahead problems will create)
console.log(object["name"]); //Aqdas (This is a good way to access the data)
// console.log(object[isLoggedIn]); //This will create error because of syntext error
console.log(object["isLoggedIn"]);

//If i create a symbol and put it into an object and access it from there
const mySymbol = Symbol("Check Symbol");
const Object2 = {
  name: "Aqdas",
  Age: 22,
  //mySymbol: "Check Symbol",
  [mySymbol]: "Check My Symbol", //This is a right syntext
  Email: "aqdasali584@gmail.com",
};
console.log(Object2.mySymbol); //This will displayed you output but it will also changed your symbol data type to string
console.log(typeof Object2.mySymbol); //string
console.log(Object2[mySymbol]); //same as upper
console.log(typeof Object2[mySymbol]); //same as upper

console.log(typeof Object2[mySymbol]);
console.log(
  Object2
); /*{name: 'Aqdas',Age: 22,Email: 'aqdasali584@gmail.com',[Symbol(Check Symbol)]: 'Check My Symbol'} */

//For Changing in the object
console.log(object);
object.Email = "aqdasali";
console.log(object); //Here Your actual data will also be changed because of non primitive data type

//If i does not permission to change my object in code again then
Object.freeze(object);
Object.Email = "aqdasaliadd";
console.log(object);

//Now add some greeting with function
object.greeting = function () {
  console.log("Hello Object User");
};
console.log(object.greeting); //[Function (anonymous)]
console.log(object.greeting()); //Hello Object User
//Extra
// object.greeting = function () {
//   console.log("Hello Object User");
// };
// console.log(greeting); //[Function: greeting](Not Properly work)
// console.log(greeting()); //Hello Object User and undefined (Undefined shows because of another execution by the compiler )
// object.greetingTwo = function () {
//   console.log(`Hello Object User ${this.name} and ${this.Email} is this`);
// };
// console.log(greetingTwo);
// console.log(greetingTwo());

object.greetingTwo = function () {
  console.log(
    `Hello Object User ${this.name}, and this is ypur email adress ${this.Email}`
  );
};
console.log(object.greetingTwo); //[Function (anonymous)]
console.log(object.greetingTwo()); //Hello Object User Aqdas, and this is ypur email adress aqdasali584@gmail.com
