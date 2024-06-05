//Literals

const Object = {
  name: "Aqdas",
  Age: 22,
  Email: "aqdasali584@gmail.com",
  Location: "Islamabad",
  isLoggedIn: true,
  lastLoggedIn: ["Monday", "Tuesday"],
};
console.log(Object.name); //Aqdas (But this is not a good way to accessing the data ahead problems will create)
console.log(Object["name"]); //Aqdas (This is a good way to access the data)
