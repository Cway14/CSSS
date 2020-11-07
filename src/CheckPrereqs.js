
import './css/tailwind.output.css'

// courseToCheck is a course object
// courses is the array of courses
function checkPrereqs(courseToCheck, courses) {

  /*
  1. Take courseToCheck as a course object
  2. From courseToCheck, get its prereq(s) as 
  an array of strings
  3. For each string in the array from 2., go through courses array
  and compare each the prereq string with each course's title.
  When a match is found, add that course object to a an array
  of course objects
  4. Those courses will have their completed variable checked.
  If all courses have completed === true, retrun true. Otherwise,
  return false.
  */

  // 1-2.
  var courseToCheckPrereqs = courseToCheck.prerequisites;

  //3.
  var prereqCoursesToCheck=[];
  for(let i = 0; i < courseToCheckPrereqs.length; i++){
    for(let j = 0; j < courses.length;j++){
      if(courseToCheckPrereqs[i] === courses[j].title){
        prereqCoursesToCheck.push(courses[j]);
      }
    }
  }

  //4.
  //If any of the course's prereqs are false, 
  //The course should not be enabled
  for(let i = 0; i < prereqCoursesToCheck.length; i++){
    if(prereqCoursesToCheck[i].completed === false){
        return false;
    }
  }
  return true;   
}

  // const courses  = [
  // {
  //   id: 120,
  //   title: "Test Course",
  //   description: "",
  //   prerequisites: [],
  //   rating: "easy",
  //   completed: false,
  //   enabled: true, //enabled if prereq's met
  // },
  // {
  //   title: "Test Course",
  //   description: "",
  //   prerequisites: [120, 125],
  //   rating: "easy",
  //   completed: false,
  //   enabled: true, //enabled if prereq's met
  // },
// ]
//   return (
//     <div className="App"> 
//       {courses.map((course) => (
//         <Course title="my title"></Course>
//       ))}
//     </div>
//   );
// }

export default checkPrereqs;