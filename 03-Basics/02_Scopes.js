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
