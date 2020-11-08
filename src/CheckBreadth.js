
import './css/tailwind.output.css'

// courseToCheck is a course object
// courses is the array of courses
function CheckBreadth(course) {

console.log("YOU MADE IT!");

var nonBreadthCourses = ["CMPT 316", "MATH 308", "MATH 401",
"MATH 343", "MACM 416", "CMPT 376W", "MACM 316",
"CMPT 320", "CMNS 353"]

//Add check for if courses are 300 or above.

var totalBreadthCredits = 0; 

var checkedCourse; 
for(let i = 0; i < course.length; i++){
    checkedCourse = course[i];
    for(let j = 0; j < nonBreadthCourses.length; j++){

    var courseParts = checkedCourse.title.split(" ");

    courseParts = courseParts[1];
    courseParts = courseParts[0];
    courseParts = courseParts[1];

    console.log("COURSE PARTS: " + courseParts);
    if(courseParts === "3" || courseParts === "4"){ 
        if(!(checkedCourse.title === nonBreadthCourses[j])){
            if(checkedCourse.complete){
            totalBreadthCredits+=Number(checkedCourse.credits);
            }
        }
    }
}
}
return totalBreadthCredits;
}

export default CheckBreadth;
