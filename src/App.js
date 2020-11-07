
import './css/tailwind.output.css'
import Course from './course';
import CheckPrereqs from './checkPrereqs';

function App() {

    const courses  = [
  {
    title: "CMPT 120",
    description: "An elementary introduction to computing science and computer programming, suitable for students with little or no programming background. Students will learn fundamental concepts and terminology of computing science, acquire elementary skills for programming in a high-level language and be exposed to diverse fields within, and applications of computing science. Topics will include: pseudocode, data types and control structures, fundamental algorithms, computability and complexity, computer architecture, and history of computing science. Treatment is informal and programming is presented as a problem-solving tool. Prerequisite: BC Math 12 or equivalent is recommended",
    prerequisites: [],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 125",
    description: "This course is a rigorous introduction to computing science, intended primarily for students who have already taken CMPT 120 as an introduction to algorithms and programming. Students will learn fundamental concepts of computing science and basic principles of algorithm design and software development. All case studies will be presented using a C-like subset of C++. The co-requisite to this course is CMPT 127, which is a 3-credit lab course. Students who enroll in CMPT 125 will be manually enrolled in CMPT 127. Students are required to take both courses at once, but their grades will be assigned independently of each other. CMPT 127 is a programming-intensive lab, where students are expected to complete approximately 100 assignments (C++ programs) over the course of 12 weeks. Assignments build in difficulty and duration from five minutes to two hours. Roughly 8-12 assignment problems will be posed per week: the first 1-3 of which will be completed with instructors and TAs in mandatory guided labs; the remainder will be completed as independent homework.",
    prerequisites: ["CMPT 120"],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 127",
    description: "Builds on CMPT 120 to give a hands-on introduction to programming in C and C++, the basics of program design, essential algorithms and data structures. Guided labs teach the standard tools and students exploit these ideas to create software that works. To be taken in parallel with CMPT 125.",
    prerequisites: [],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 150",
    description: "Digital design concepts are presented in such a way that students will learn how basic logic blocks of a simple computer are designed. Topics covered include: basic Von Neumann computer architecture; an introduction to assembly language programming; combinational logic design; and sequential logic design.",
    prerequisites: ["MACM 101", "CMPT 120"],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 225",
    description: "Introduction to a variety of practical and important data structures and methods for implementation and for experimental and analytical evaluation. Topics include: stacks, queues and lists; search trees; hash tables and algorithms; efficient sorting; object-oriented programming; time and space efficiency analysis; and experimental evaluation.",
    prerequisites: ["MACM 101", "CMPT 125","CMPT 127"],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 250",
    description: "This course deals with the main concepts embodied in computer hardware architecture. In particular, the organization, design and limitations of the major building blocks in modern computers is covered in detail. Topics will include: processor organization; control logic design; memory systems; and architectural support for operating systems and programming languages. A hardware description language will be used as a tool to express and work with design concepts. ",
    prerequisites: ["CMPT 150"],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 275",
    description: "Introduction to software engineering techniques used in analysis/design and in software project management. The course centres on a team project involving requirements gathering, object analysis and simple data normalization, use-case-driven user documentation and design followed by implementation and testing. Additionally, there is an introduction to project planning, metrics, quality assurance, configuration management, and people issues.",
    prerequisites: ["CMPT 225", "MACM 101", "MATH 151/150" ],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
      title: "MATH 151/150",
      description: "Designed for students specializing in mathematics, physics, chemistry, computing science and engineering. Logarithmic and exponential functions, trigonometric functions, inverse functions. Limits, continuity, and derivatives. Techniques of differentiation, including logarithmic and implicit differentiation. The Mean Value Theorem. Applications of differentiation including extrema, curve sketching, Newton's method. Introduction to modeling with differential equations. Polar coordinates, parametric curves.",
      prerequisites: [],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MATH 152",
      description: "Riemann sum, Fundamental Theorem of Calculus, definite, indefinite and improper integrals, approximate integration, integration techniques, applications of integration. First-order separable differential equations and growth models. Sequences and series, series tests, power series, convergence and applications of power series.",
      prerequisites: ["MATH 151/150"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MACM 101",
      description: "Introduction to counting, induction, automata theory, formal reasoning, modular arithmetic.",
      prerequisites: ["MATH 151/150"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MACM 201",
      description: "A continuation of MACM 101. Topics covered include graph theory, trees, inclusion-exclusion, generating functions, recurrence relations, and optimization and matching.",
      prerequisites: ["MACM 101"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MATH 232/240",
      description: "Linear equations, matrices, determinants. Introduction to vector spaces and linear transformations and bases. Complex numbers. Eigenvalues and eigenvectors; diagonalization. Inner products and orthogonality; least squares problems. An emphasis on applications involving matrix and vector calculations.",
      prerequisites: ["MATH 151/150"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "STAT 270",
      description: "Basic laws of probability, sample distributions. Introduction to statistical inference and applications.",
      prerequisites: ["MATH 152"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
]

var test = (CheckPrereqs(courses[1], courses));

  return (
    <div className="App"> 
      {courses.map((course) => (
        <Course title="my title"></Course>
      ))}
    </div>
  );
}

export default App;
