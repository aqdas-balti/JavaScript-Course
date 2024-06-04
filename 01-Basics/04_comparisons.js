//Best and mostly useful comparison operations are:
console.log("Best Comparison Operations");
console.log(2 > 1); //grater then (true)
console.log(2 < 1); //less then (false)
console.log(2 >= 1); //grater then equal to (true)
console.log(2 <= 1); //less then equal to (false)
console.log(2 != 1); //not equal to (true)

// comparisons with different data types (Do not prefer this type of comparison because of confusion)
console.log("Comparison with different data types");
console.log("2" > 1); //true
console.log("02" > "4"); //false

console.log("Null");
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true (because of =)
console.log(null <= 0); //true (because of =)
console.log(null != 0); //true

console.log("Undefined");
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false
console.log(undefined != 0); //true

//Strick check up with === operator this will check the both data type also
console.log("Strick Checkup with ===");
console.log("2" === 2); //false
console.log(typeof ("2" === 2)); //boolean
let change = String("2" === 2);
console.log(typeof change); //string
