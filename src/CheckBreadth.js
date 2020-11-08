
import './css/tailwind.output.css'

// courseToCheck is a course object
// courses is the array of courses
function CheckBreadth(course, totalBreadthCredits, updateCredits) {

var nonBreadthCourses = ["CMPT 316", "MATH 308", "MATH 401",
"MATH 343", "MACM 416", "CMPT 376W", "MACM 316",
"CMPT 320", "CMNS 353"]

//Add check for if courses are 300 or above.

var checkedCourse; 
for(let i = 0; i < course.length; i++){
    for(let j = 0; j < nonBreadthCourses.length; j++){
        if(course[i].complete){
        var courseNameArray = course[i].title.split(" ");
        console.log("Course Title: " + courseNameArray);
        var id = courseNameArray[1];
        console.log("ID: " + id);

        if(id[0] === "3" || id[0] === "4"){ 
            if(!(course[i].title === nonBreadthCourses[j])){
                    updateCredits(totalBreadthCredits+=Number(course[i].credits));
            }
        }
    }
}
}
return totalBreadthCredits;
}

export default CheckBreadth;
