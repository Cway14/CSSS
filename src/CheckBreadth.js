
import './css/tailwind.output.css'

// courseToCheck is a course object
// courses is the array of courses
function CheckBreadth(course) {


var nonBreadthCourses = ["CMPT 316", "MATH 308", "MATH 401",
"MATH 343", "MACM 416", "CMPT 376W", "MACM 316",
"CMPT 320", "CMNS 353"]

//Add check for if courses are 300 or above.

var totalBreadthCredits = 0; 

var checkedCourse; 

for(let i = 0; i < course.length; i++){
    checkedCourse = course[i];
    for(let j = 0; j < nonBreadthCourses.length; j++){

    //Split the name
    //Check first digit of second helf 
    //If upper div, take course 

    //Split into two parts - Course Name and Number 
    var courseParts = checkedCourse.title.split(" ");

    //Assign courseParts to the Course NUMBER
    courseParts = courseParts[1];
    
    //Assign the FIRST letter in Course Number to courseparts
    courseParts = courseParts[0];

    if(courseParts === "3" || courseParts === "4"){ 
        if(!(checkedCourse.title === nonBreadthCourses[i])){
            totalBreadthCredits+=course.credits;
        }
    }
}
}
return totalBreadthCredits;
}

export default CheckBreadth;
