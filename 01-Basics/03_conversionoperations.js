// //In this we can convert the one data type to another
let score = 60;
console.log("Actual Ans:", score); //60
console.log("Actual typeof 60:", typeof score); //number
console.log(
  "This is the actual typeof with another way of writing:",
  typeof score
); //number
//now below we convert the data types to another form, just check it out and study with investigation
let valinString = String(score); //This converts the number into string with this class String
console.log("This is converted from number to string:", typeof valinString); //string

console.log("Boolean Process Starts From Here Below:");
let check1 = true;
console.log("Actual Ans:", check1);
console.log("Actual typeof true:", typeof check1);
//now below we convert the data types to another form, just check it out and study with investigation
let valboolNumber = Number(check1); //Converted to number
console.log("Converted value:", valboolNumber);
console.log("Converted typeof value:", typeof valboolNumber); //true(1)and false(0) understood

console.log("Null Stars From Here Below");
let check2 = null;
console.log("Actual Ans:", check2); //null
console.log("Actual typeof null:", typeof check2); //object
//now below we convert the data types to another form, just check it out and study with investigation
let valnullNumber = Number(check2); //Converted to number
console.log("Converted val of null:", valnullNumber); //0
console.log("Converted val typeof null:", typeof valnullNumber); //number

console.log("Undefined Starts From Here Below:");
let check3 = undefined;
console.log("Actual Ans:", check3); //undefined
console.log("Actual typeof undefined:", typeof check2); //object
//now below we convert the data types to another form, just check it out and study with investigation
let valundefinedNumber = Number(check3); //Converted to number
console.log("Converted val of undefined:", valundefinedNumber); //NaN
console.log("Converted val typeof undefined:", typeof valundefinedNumber); //number
/*60 => 60
  "60abc" => NaN (Not a Number)
  1 => true and 0 => false
*/

console.log("Boolean Starts");
let isLoggedin = 1;
console.log("Actual Ans is:", isLoggedin); //1
console.log("Actual typeof boolean is:", typeof isLoggedin); //number

let booleanval = Boolean(isLoggedin);
console.log("Converted Ans is:", booleanval); //true
console.log("Converted typeof Ans is:", typeof booleanval); //boolean
/* 1 => true
   0 => false
   "" => false
   "Aqdas" => true
*/
/********************************Operation Conversion********************************** */
console.log("02-Conversion Operations:");
let str1 = "Hello";
let str2 = "World!";
let str = str1 + str2;
console.log(str);
console.log(1 + 2 + "3"); //33 values will be react with the first data type in this first data type is no that's why firstly add two no's then concatinate the 3rd no
console.log(typeof (1 + 2 + "3")); //string
console.log("1" + 2 + 3); //123
console.log(typeof ("1" + 2 + 3)); //string
console.log(2 * 3 + (3 + 1) * 5); //26
console.log(true); //true
console.log(+true); //1 and (true+ isn't valid it simply generates error)
console.log(+""); //0 because "" is false in boolean that's why when increment it generates its original valus 0
console.log(+"Aqdas"); //NaN (Not a Number)
let num1, num2, num3;
num1 = num2 = num3 = 3 + 3;
console.log(num1); //6
let gameCounter = 99;
gameCounter++; //Postfix increment technique
console.log(gameCounter); //100
++gameCounter; //Prefix increment technique
console.log(gameCounter); //101
//Copied from internet of prefix and postfix
let x = 3;
const y = x++;

console.log("x:", x, "y:", y);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log("a:", a, "b:", b);
// Expected output: "a:4, b:4"
