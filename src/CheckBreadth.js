
import './css/tailwind.output.css'

// courseToCheck is a course object
// courses is the array of courses
function CheckBreadth(course) {
    
var nonBreadthCourses = ["CMPT 316", "MATH 308", "MATH 401",
"MATH 343", "MACM 416", "CMPT 376W", "MACM 316",
"CMPT 320", "CMNS 353"]

for(let i = 0; i < nonBreadthCourses.length; i++){
    if(course.title === nonBreadthCourses[i]){
        return false;
    }
    return true; 
}
}

export default CheckBreadth;