function creditCounter(courses, updateCredits){
    console.log("reached");
    let credits = 0;
    for(let i = 0; i < courses.length; i++){
        if(courses[i].completed){
            credits += parseInt(courses[i].credits);
        }
    }
    updateCredits(credits);
}

export default creditCounter;