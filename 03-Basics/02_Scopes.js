//Scopes of Variables
//Var is a global Scope
//Const adb let is a local scope
var c = 300;
let a = 100;
//Block Scope
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner a is: ", a);
}
//Outside of block there is a global scope

//console.log(a);
//console.log(b);
console.log("Outer a is: ", a);
console.log("Var Scope Outer: ", c);

//Nested Functions
//Closure in js (Learn ahead)

function One() {
  const userName = "Aqdas Ali";

  function Two() {
    const website = "YouTube";
    console.log(userName); //Check That can i access the userName into the inner function of One
  }
  //console.log(website); //Parent doesn't use the child properties that's why it occurs error
  Two(); //Aqdas Ali
}
One();

//Nested If

if (true) {
  const userName = "aqdas ali";
  if (userName === "aqdas ali") {
    const website = " Youtube";
    console.log(userName + website);
  }
  // console.log(website); //It occurs error because of scope
}
// console.log(userName); //It occurs error because of scope

//***************Interesting Example******************/

//Function Deceleration
//Simple Function
addOne(5);
function addOne(num) {
  return num + 1;
}
// addOne(5); //We can call function before the function in simple function case it doesn't occurs error or Can access 'addOne' before initialization
// console.log(addOne(5)); //6
//Expression function or variable function
// addTwo(5);//We can't call function before the function in expression function case it occurs error or Cannot access 'addTwo' before initialization (Hoisting Concept we can learn in ahead)
// const addTwo = function (num) {
//   return num + 2;
// };
// addTwo(5);
