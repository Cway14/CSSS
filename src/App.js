
import React, {useEffect, useState} from 'react';
import './css/tailwind.output.css'
import Course from './course';
import CheckBreadth from "./CheckBreadth";
import checkPrereqs from './CheckPrereqs';
import SideBar from './SideBar';
import coursesJSON from "./coursesJSON.json"
import creditCounter from './creditCounter';

function App() {
    const [courses, updateCourses]  = useState(coursesJSON.courses);
    const [credits, updateCredits] = useState(0);
    
    useEffect(()=>{
      creditCounter(courses, updateCredits);
      console.log(credits);
    },[])

    updateEnabled();  
    const [selectedCourse, setCourse] = useState(courses[0]);

    function updateEnabled(){
      for(let i = 0; i < courses.length; i++){
        const newEnabled = checkPrereqs(courses[i], courses);
        let changed = false;
        if(newEnabled === courses[i].enabled){
          changed = false;
        } else {
          changed = true;
          courses[i].enabled = newEnabled;
      }

      if(changed){
        const newCourses = [...courses];
      newCourses.splice(i, 1, {
          title: courses[i].title,
          description: courses[i].description,
          comments: courses[i].comments,
          credits: courses[i].credits,
          prerequisites: courses[i].prerequisites,
          rating: courses[i].prerequisites,
          completed: courses[i].completed,
          enabled: courses[i].enabled, 
      })
      updateCourses(newCourses)
    }
    }
  }

  function updateCompleted(courseTitle, iscompleted){
    for(let i = 0; i < courses.length; i++){
      if(courseTitle === courses[i].title){
        courses[i].completed = iscompleted;
      }
    }
    updateEnabled();
    creditCounter(courses, updateCredits);
    console.log(credits);
  }

  return (
    <div>
      <div className="flex items-center h-16 w-full bg-red-700 justify-center fixed">
        <h1 className="m-8 text-3xl font-bold text-white">Course Seeing Selecting Savant</h1>
      </div>
      <div className="flex"> 
        <div className="sm:w-1/2 mt-20">
          {courses.map((course, index) => {
              if(course.title[5] <= 2){
                return <Course {...course} focusedCourse={setCourse} toggleCompleted={updateCompleted} key={index}></Course>
              }
              })}
        </div>
        <SideBar {...selectedCourse} credits={credits}/>
      </div>
    </div>
    )
}

export default App;