// Function definition syntax
function myFunction() {
  console.log("A");
  console.log("q");
  console.log("d");
  console.log("a");
  console.log("s");
}
//This is function reference only (myFunction) if I want to execute the use parenthesis after reference like (myFunction())
myFunction();
console.log("First Functions Ends");

//parameterized function:When we define a function and take inputs in the parenthesis that inputs is called parameters
//Arguments: When we call a functions at that time the given values is called arguments like
function addNo(number1, number2) {
  //Parametrized functions
  console.log(number1 + number2);
}
addNo(4, 3); //Arguments passing of a function//7
addNo(4, "4"); //44 Treat as a string
//In this situation if i store a result into a new variable the the actual variable is undefined like
const result1 = addNo(5, 6); //11
console.log("Result1:", result1); //undefined
console.log("Second Functions Ends");

//To avoid the above scenario check below
function sum(number1, number2) {
  //   let result2 = number1 + number2;
  //   return result2; //after return no other statements will executed
  //or
  return number1 + number2;
}
const result2 = sum(2, 2);
console.log("Result2:", result2); //4
console.log("Third Functions Ends");

function userLoggedIn(username) {
  //1st   console.log(`${username} Is Logged In`); or
  return `${username} Is Logged In`; //2nd
}
//1st userLoggedIn("Aqdas");// Aqdas IS Logged In
console.log(userLoggedIn("Aqdas Ali")); //2nd //Aqdas Ali Is Logged In
console.log(userLoggedIn("")); // Is Logged In
console.log(userLoggedIn()); //undefined IS Logged In
console.log("Fourth Functions Ends");

function userLoggedIn2(username2) {
  if (username2 === undefined) {
    //or if(!username2)
    console.log("Please Enter Your Name");
    return;
  }
  return `${username2} Is Logged In`;
}
console.log(userLoggedIn2()); /*Please Enter Your Name
undefined Is Logged In */
console.log(userLoggedIn2("Aqdas Ali G"));
console.log("Fifth Function Ends");

//By default name
function userLoggedIn3(username3 = "David") {
  return `${username3} Is Logged In`;
}
console.log(userLoggedIn3()); //David Is Logged In
console.log(userLoggedIn3("Aqdas Ali G"));
