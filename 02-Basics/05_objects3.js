//json or Api's
const course = {
  name: "JavaScript",
  price: "999",
  courseInstructor: "Aqdas Ali",
};
/* 
console.log(course.courseInstructor);//Aqdas Ali

Destructure the object mostly used in React
const { courseInstructor } = course;
console.log(courseInstructor); //Aqdas Ali

we can also change or destructure the key name of an object like
const { courseInstructor: Instructor } = course;
console.log(Instructor); //Aqdas Ali
*/

/*In React we use destructuring like this
 const navbar = ({ company }) => {

 };
navbar((company = "Ali"));
*/

/* Api's with object Syntax like
{
  "name": "Aqdas Ali",
  "Age": 22,
  "courseName":"Java",
  "Fee":"Free"
}
*/

/*Api's with Arrays in objects syntax like
[
  {},
  {},
  {}
]
  */
