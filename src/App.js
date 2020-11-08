
import React, {useState} from 'react';
import './css/tailwind.output.css'
import Course from './course';
import checkPrereqs from './CheckPrereqs';
import SideBar from './SideBar';
import coursesJSON from "./coursesJSON.json"

function App() {
    console.log(coursesJSON);
    const [courses, updateCourses]  = useState(coursesJSON.courses);

  const [selectedCourse, setCourse] = useState(courses[0]);
  updateEnabled();

  function updateEnabled(){
    for(let i = 0; i < courses.length; i++){
      const newEnabled = checkPrereqs(courses[i], courses);
      let changed = false;
      if(newEnabled === courses[i].enabled){
        changed = false;
      }else{
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
          enabled: courses[i].enabled, //enabled if prereq's met
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
  }

  return (
    <div className="flex"> 
      <div className="sm:w-1/2">
        {courses.map((course, index) => {
              return <Course {...course} focusedCourse={setCourse} toggleCompleted={updateCompleted} key={index}></Course>
            })}
      </div>
      <SideBar {...selectedCourse}/>
    </div>
    )
}


export default App;