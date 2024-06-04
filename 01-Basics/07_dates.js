//temporal.now.instant();(proposal for the coming dates may be this includes to get date direct)
const myDate = new Date();
console.log(typeof Date); //function
console.log(typeof Date()); //string
console.log(typeof myDate); //object
console.log(myDate); //2024-05-31T06:31:03.736Z(This appears in result that is not in better readable form in programming fields)
console.log(myDate.toString()); //Fri May 31 2024 11:34:00 GMT+0500 (Pakistan Standard Time) This is better then the previous one
console.log(myDate.toDateString()); //Fri May 31 2024
console.log(myDate.getTime()); //1717137505467
console.log(myDate.getFullYear()); //2024
console.log(myDate.getDate()); //31 (31-05-2024)
console.log(myDate.getDay()); //5(Friday)
console.log(myDate.getHours()); //11(11:42 am)
console.log(myDate.getMinutes()); //43
console.log(myDate.getTimezoneOffset()); //-300
console.log(myDate.getUTCDate()); //31
console.log(myDate.toISOString()); //2024-05-31T06:45:32.376Z
console.log(myDate.toLocaleDateString()); //5/31/2024
console.log(myDate.toLocaleString()); //5/31/2024, 11:52:19 AM

const myCreatedDate = new Date("01-15-2024"); //Format (MM-DD-YY)
console.log(typeof myCreatedDate); //object
console.log(myCreatedDate); //1926-01-22T18:30:00.000Z(Not in readable form to convert it into readable form we use different methods of date )
console.log(myCreatedDate.toDateString()); //Sat Jan 23 1926 if i use const myCreatedDate = new Date(26, 0, 23);
console.log(myCreatedDate.toDateString); //Thu Jan 11 2024 when we use const myCreatedDate = new Date(2024, 0, 11);
console.log(myCreatedDate.toLocaleString()); //5/31/2024, 4:50:00 AM when we use const myCreatedDate = new Date(2024, 4, 31, 4, 50);
console.log(myCreatedDate.toLocaleString()); //1/15/2024, 12:00:00 AM when we use const myCreatedDate = new Date("01-15-2024"); //Format (MM-DD-YY)

const myTimeStamp = Date.now();
console.log(typeof myTimeStamp); //object
console.log(typeof Date.now); //function
console.log(typeof Date.now()); //number
console.log(myTimeStamp); //1717139883502 (Millie Seconds from 1st jan 1970)
console.log(myCreatedDate.getTime()); //1705258800000 (Millie Seconds from 1st jan 1970 to 15 jan 2024)

console.log(Date.now() / 1000); //1717140256.898 Converted millie second to second but here problem appear that is decimal no to avoid decimal no see next line
console.log(Math.round(Date.now() / 1000)); //1717140392 (it neglect decimal no)
console.log(Math.floor(Date.now() / 1000)); //1717140439 (We can also use floor)

//more customization of dates we use
myDate.toLocaleString("default", {
  weekday: "long",
});
