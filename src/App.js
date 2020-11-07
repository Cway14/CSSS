
import React, {useState} from 'react';
import './css/tailwind.output.css'
import Course from './course';

function App() {
  const courses  = [
  {
    title: "CMPT 276",
    description: "asdgadbg",
    prerequisites: ["CMPT 120", "CMPT 225"],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
    },
    {
      title: "CMPT 225",
      description: "asdgadbg",
      prerequisites: ["CMPT 120", "CMPT 225"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
      },
  ]
  const [selectedCourse, setCourse] = useState(courses[0]);

  return (
    <div className="flex"> 
      <div className="w-1/2">
        {courses.map((course) => (
            <Course {...course} focusedCourse={setCourse}></Course>
          ))}
      </div>
      <div className="w-1/2 m-2 p-4 rounded-lg h-screen bg-gray-100 text-center">
        <h1 className="text-2xl font-bold w-full border-b">{selectedCourse.title}</h1>
        <p className="mt-4">{selectedCourse.description}</p>
      </div>
    </div>
  );
}

export default App;