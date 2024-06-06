//Singleton: When Constructor uses with object
console.log("**************Singleton**************");
const dataBase = new Object();
// console.log(dataBase); //{}

//As a literal uses of objects, in which constructor are not used no difference in output showing
console.log("***************Literals***************");
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
console.log(Web.userDetail); //{ fullName: { name: 'Aqdas', lastName: 'Ali' }, Age: 22 }
console.log(Web.userDetail.fullName.name); //Aqdas
