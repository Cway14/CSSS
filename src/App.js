
import './css/tailwind.output.css'
import Course from './course';

function App() {
  const courses  = [
  {
    id: 120,
    title: "Test Course",
    description: "",
    prerequisites: [],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "Test Course",
    description: "",
    prerequisites: [120, 125],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
]
  return (
    <div className="App"> 
      {courses.map((course) => (
        <Course title="my title"></Course>
      ))}
    </div>
  );
}

export default App;