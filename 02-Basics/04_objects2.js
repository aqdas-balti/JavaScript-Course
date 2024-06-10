//Singleton: When Constructor uses with object
// console.log("**************Singleton**************");
const dataBase = new Object();
// console.log(dataBase); //{}

//As a literal uses of objects, in which constructor are not used no difference in output showing
// console.log("***************Literals***************");
const websiteUser = {};
// console.log(websiteUser); //{}

const Web = {};
Web.id = "1122";
Web.name = "Dev";
Web.userDetail = {
  fullName: {
    name: "Aqdas",
    lastName: "Ali",
  },
  Age: 22,
};
// console.log(Web);

console.log(Web.id); //1122
// console.log(Web.userDetail); //{ fullName: { name: 'Aqdas', lastName: 'Ali' }, Age: 22 }
// console.log(Web.userDetail.fullName.name); //Aqdas

//Combining Different Objects
console.log("*************Combining The Objects*************");
let obj1 = { name: "Maisum", Age: 17 };
let obj2 = { name: "Kumil", Age: 26 };
let obj3 = { name: "Aqdas", Age: 22 };

// const obj4 = Object(obj1, obj2, obj3);//{ name: 'Maisum', Age: 17 }
// const obj4 = { obj1, obj2, obj3 }; //{obj1: { name: 'Maisum', Age: 17 },obj2: { name: 'Kumil', Age: 26 },obj3: { name: 'Aqdas', Age: 22 }}
// const obj4 = Object.assign(obj1, obj2, obj3); //{ name: 'Aqdas', Age: 22 } Instead of this below is better
// const obj4 = Object.assign({}, obj1, obj2, obj3); //{ name: 'Aqdas', Age: 22 } { this shows the target object}
//But we mostly uses this technique to combines different objects (Spread method)
const obj4 = { ...obj1, ...obj2, ...obj3 }; //Mostly we use this
// console.log(obj4); //{ name: 'Aqdas', Age: 22 }

const users = [
  {
    id: 1,
    emailId: "aqdasali584@gmail.com",
  },
  {
    id: 2,
    emailId: "aqdasali584@gmail.com",
  },
  {
    id: 3,
    emailId: "aqdasali584@gmail.com",
  },
];
console.log(users[0].id); //1

let mineWebsite = {
  name: "Maisum",
  Age: 17,
  emailId: "maisum@gmail.com",
  mobNo: "0343-4422584",
};
console.log(mineWebsite);
console.log(Object.keys(mineWebsite)); //It prints all the keys of the mentioned object in an array form like [ 'name', 'Age', 'emailId', 'mobNo' ]
console.log(Object.values(mineWebsite)); //only display values of the object in array form like [ 'Maisum', 17, 'maisum@gmail.com', '0343-4422584' ]
console.log(Object.entries(mineWebsite)); //It shows the entire entries and each entries will be shown in an array form one by one like [[ 'name', 'Maisum' ],[ 'Age', 17 ], [ 'emailId', 'maisum@gmail.com' ],[ 'mobNo', '0343-4422584' ]]

//We can also ask to the object that it is present or not in object like
console.log(mineWebsite.hasOwnProperty("isLoggedIn")); //false
console.log(mineWebsite.hasOwnProperty("name")); //true
console.log(mineWebsite.hasOwnProperty("Maisum")); //we can only ast in this scenario to the key reference not the value like above 'Maisum (It is value of mineWebsite name)'
