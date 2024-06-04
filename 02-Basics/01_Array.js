//Arrays
//console.log("Array Starts");
let myArray1 = [1, 2, 3, 4, 5];
let myArray2 = ["Aqdas", "Anwar", "Furqan", "Irfan"];
let myArray3 = new Array(1, 2, 3, 4, 5);
console.log(myArray1); //[ 1, 2, 3, 4, 5 ]
console.log(myArray1[0]); //1
console.log(typeof [1, 2, 3, 4, 5]); //object
console.log(typeof myArray1); //object
console.log(myArray2); //[ 'Aqdas', 'Anwar', 'Furqan', 'Irfan' ]
console.log(myArray2[2]); //Furqan
console.log(typeof myArray2); //object
console.log(myArray3); //[ 1, 2, 3, 4, 5 ]
console.log(myArray3[4]); //5
console.log(typeof Array); //Function
console.log(typeof myArray3); //object

//Array Methods
console.log("Methods Stars");
//Push and Pop Methods of Array
myArray1.push(6); //push add value at the end of an array
console.log(myArray1); //[ 1, 2, 3, 4, 5, 6 ]
myArray1.pop(6); //pop remove the value from the last of an array
console.log(myArray1); //[ 1, 2, 3, 4, 5 ]
myArray2.push("Zafran");
myArray2.pop(); //[ 'Aqdas', 'Anwar', 'Furqan', 'Irfan' ]
console.log(myArray2); //[ 'Aqdas', 'Anwar', 'Furqan', 'Irfan', 'Zafran' ]
myArray3.push(6);
myArray3.pop(); //[ 1, 2, 3, 4, 5]
console.log(myArray3); //[ 1, 2, 3, 4, 5, 6 ]

//Shift and un Shift Methods of Array
let myArray4 = [1, 2, 3, 4, 5];
myArray1.unshift(0); //unshift is used to add a value to the beginning point of an array
console.log(myArray4); //[ 0, 1, 2, 3, 4, 5 ]
myArray1.shift(); //Shift is used to remove the beginning value of an array
console.log(myArray4); //[ 1, 2, 3, 4, 5 ]

//Some Questioners Method in arrays are:
console.log(myArray4.includes(10)); //false //It declares boolean ans t/f
console.log(myArray4.indexOf(9)); //-1 declare if the value is not existing in array
console.log(myArray4); //[1, 2, 3, 4, 5];
console.log(myArray4.indexOf(4)); // (3)   index no 3 have value 4 is present

//join is used to convert the array into a string
let myArray5 = [1, 2, 3, 4, 5];
let newArray1 = myArray5.join();
console.log(newArray1); //1,2,3,4,5
console.log(typeof newArray1); //string

//slice and splice
//In slice end range is not included and its also does not manipulate original array
let myArray6 = [1, 2, 3, 4, 5];
console.log("A ", myArray6);
let newArray2 = myArray6.slice(1, 4);
//A  [ 1, 2, 3, 4, 5 ]
console.log("Slice", newArray2); //A  [2, 3, 4] (Stars index 1 and ends index 3)
console.log("B ", myArray6); //Slice [1, 2, 3, 4, 5](Does not manipulates the actual array)
//In splice end range is include and its also effects the main array or actual array(Manipulate the actual array the range that you are inserted in the splice is extracted from the actual array)
let newArray3 = myArray6.splice(1, 4);
console.log("Splice", newArray3); //Splice [ 2, 3, 4, 5 ]
console.log("C ", myArray6); //C  [ 1 ]

//Copied from net
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 2, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
