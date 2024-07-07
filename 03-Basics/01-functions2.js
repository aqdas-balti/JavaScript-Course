//function using in Carts
function calculateCartPrice(num) {
  return num;
}
console.log(calculateCartPrice(200, 400, 600)); //200
//Use Rest Operator some time its is also called spread operator
function calculateCartPrice1(...num1) {
  return num1;
}
console.log(calculateCartPrice1(200, 400, 600));

function calculateCartPrice2(val1, val2, num2) {
  return num2;
}
console.log(calculateCartPrice2(200, 400, 600)); //600 first 2nd no's are store bye val1 and val2

//Object Passing in function or use it
const user = {
  userName: "Aqdas Ali",
  price: 200,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.userName} and Price is ${anyobject.price} `
  );
}
handleObject(user);
console.log(typeof user); //object
//Direct Pass the object into the function
handleObject({
  userName: "Ali",
  price: 201,
});

//Array using in the funtion
const myArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
//console.log(returnSecondValue(myArray));//400
console.log(returnSecondValue([200, 400, 100, 600])); //400
