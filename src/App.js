
import './css/tailwind.output.css'
import Course from './course';

function App() {
    const courses  = [
  {
    title: "CMPT 120",
    description: "An elementary introduction to computing science and computer programming, suitable for students with little or no programming background. Students will learn fundamental concepts and terminology of computing science, acquire elementary skills for programming in a high-level language and be exposed to diverse fields within, and applications of computing science. Topics will include: pseudocode, data types and control structures, fundamental algorithms, computability and complexity, computer architecture, and history of computing science. Treatment is informal and programming is presented as a problem-solving tool. Prerequisite: BC Math 12 or equivalent is recommended",
    comments: "",
    credits: "3",
    prerequisites: [],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 125",
    description: "This course is a rigorous introduction to computing science, intended primarily for students who have already taken CMPT 120 as an introduction to algorithms and programming. Students will learn fundamental concepts of computing science and basic principles of algorithm design and software development. All case studies will be presented using a C-like subset of C++. The co-requisite to this course is CMPT 127, which is a 3-credit lab course. Students who enroll in CMPT 125 will be manually enrolled in CMPT 127. Students are required to take both courses at once, but their grades will be assigned independently of each other. CMPT 127 is a programming-intensive lab, where students are expected to complete approximately 100 assignments (C++ programs) over the course of 12 weeks. Assignments build in difficulty and duration from five minutes to two hours. Roughly 8-12 assignment problems will be posed per week: the first 1-3 of which will be completed with instructors and TAs in mandatory guided labs; the remainder will be completed as independent homework.",
    comments: "",
    credits: "3",
    prerequisites: ["CMPT 120"],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 127",
    description: "Builds on CMPT 120 to give a hands-on introduction to programming in C and C++, the basics of program design, essential algorithms and data structures. Guided labs teach the standard tools and students exploit these ideas to create software that works. To be taken in parallel with CMPT 125.",
    comments: "",
    credits: "3",
    prerequisites: [],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 150",
    description: "Digital design concepts are presented in such a way that students will learn how basic logic blocks of a simple computer are designed. Topics covered include: basic Von Neumann computer architecture; an introduction to assembly language programming; combinational logic design; and sequential logic design.",
    comments: "",
    credits: "3",
    prerequisites: ["MACM 101", "CMPT 120"],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 225",
    description: "Introduction to a variety of practical and important data structures and methods for implementation and for experimental and analytical evaluation. Topics include: stacks, queues and lists; search trees; hash tables and algorithms; efficient sorting; object-oriented programming; time and space efficiency analysis; and experimental evaluation.",
    comments: "",
    credits: "3",
    prerequisites: ["MACM 101", "CMPT 125","CMPT 127"],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 250",
    description: "This course deals with the main concepts embodied in computer hardware architecture. In particular, the organization, design and limitations of the major building blocks in modern computers is covered in detail. Topics will include: processor organization; control logic design; memory systems; and architectural support for operating systems and programming languages. A hardware description language will be used as a tool to express and work with design concepts. ",
    comments: "",
    credits: "3",
    prerequisites: ["CMPT 150"],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
    title: "CMPT 275",
    description: "Introduction to software engineering techniques used in analysis/design and in software project management. The course centres on a team project involving requirements gathering, object analysis and simple data normalization, use-case-driven user documentation and design followed by implementation and testing. Additionally, there is an introduction to project planning, metrics, quality assurance, configuration management, and people issues.",
    comments: "",
    credits: "3",
    prerequisites: ["CMPT 225", "MACM 101", "MATH 151/150" ],
    rating: "easy",
    completed: false,
    enabled: true, //enabled if prereq's met
  },
  {
      title: "MATH 151/150",
      description: "Designed for students specializing in mathematics, physics, chemistry, computing science and engineering. Logarithmic and exponential functions, trigonometric functions, inverse functions. Limits, continuity, and derivatives. Techniques of differentiation, including logarithmic and implicit differentiation. The Mean Value Theorem. Applications of differentiation including extrema, curve sketching, Newton's method. Introduction to modeling with differential equations. Polar coordinates, parametric curves.",
      comments: "",
      credits: "3",
      prerequisites: [],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MATH 152",
      description: "Riemann sum, Fundamental Theorem of Calculus, definite, indefinite and improper integrals, approximate integration, integration techniques, applications of integration. First-order separable differential equations and growth models. Sequences and series, series tests, power series, convergence and applications of power series.",
      comments: "",
      credits: "3",
      prerequisites: ["MATH 151/150"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MACM 101",
      description: "Introduction to counting, induction, automata theory, formal reasoning, modular arithmetic.",
      comments: "",
      credits: "3",
      prerequisites: ["MATH 151/150"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MACM 201",
      description: "A continuation of MACM 101. Topics covered include graph theory, trees, inclusion-exclusion, generating functions, recurrence relations, and optimization and matching.",
      comments: "",
      credits: "3",
      prerequisites: ["MACM 101"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MATH 232/240",
      description: "Linear equations, matrices, determinants. Introduction to vector spaces and linear transformations and bases. Complex numbers. Eigenvalues and eigenvectors; diagonalization. Inner products and orthogonality; least squares problems. An emphasis on applications involving matrix and vector calculations.",
      comments: "",
      credits: "3",
      prerequisites: ["MATH 151/150"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "STAT 270",
      description: "Basic laws of probability, sample distributions. Introduction to statistical inference and applications.",
      comments: "",
      credits: "3",
      prerequisites: ["MATH 152"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 310",
      description: "Provides a unified discussion of the fundamental approaches to the problems in artificial intelligence. The topics considered are: representational typology and search methods; game playing, heuristic programming; pattern recognition and classification; theorem-proving; question-answering systems; natural language understanding; computer vision.",
      comments: "",
      credits: "3",
      prerequisites: ["CMPT 225", "MACM 101"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 340",
      description: "The principles involved in using computers for data acquisition, real-time processing, pattern recognition and experimental control in biology and medicine will be developed. The use of large data bases and simulation will be explored.",
      comments: "Completion of 60 units is mandotory",
      credits: "3",
      prerequisites: ["CMPT 125"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 411",
      description: "Formal and foundational issues dealing with the representation of knowledge in artificial intelligence systems are covered. Questions of semantics, incompleteness, non-monotonicity and others will be examined. As well, particular approaches, such as procedural or semantic network, may be discussed.",
      comments: " Completion of nine units in Computing Science upper division courses or, in exceptional cases, permission of the instructor.",
      credits: "3",
      prerequisites: [],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 412",
      description: "Computational approaches to image understanding will be discussed in relation to theories about the operation of the human visual system and with respect to practical applications in robotics. Topics will include edge detection, shape from shading, stereopsis, optical flow, Fourier methods, gradient space, three-dimensional object representation and constraint satisfaction.",
      comments:" nine units in Computing upper division courses or permission of the instructor are mandotory",
      credits: "3",
      prerequisites: ["MATH 152"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 413",
      description: "This course examines the theoretical and applied problems of constructing and modelling systems, which aim to extract and represent the meaning of natural language sentences or of whole discourses, but drawing on contributions from the fields of linguistics, cognitive psychology, artificial intelligence and computing science.",
      comments:"Completion of nine units in Computing Science upper division courses or, in exceptional cases, permission of the instructor.",
      credits: "3",
      prerequisites: [],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 414",
      description: "This course covers various topics in computer vision with the emphasis on the model-based approach. Main subjects include 2-D and 3-D representations, matching, constraint relaxation, model-based vision systems. State-of-the-art robot vision systems will be used extensively as study cases. The solid modelling and CAD aspects of this course should also interest students of computer graphics.",
      comments: "nine units in CMPT upper division courses, or permission of the instructor.",
      credits: "3",
      prerequisites: ["MATH 152"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 417",
      description: "Intelligent Systems using modern constraint programming and heuristic search methods. A survey of this rapidly advancing technology as applied to scheduling, planning, design and configuration. An introduction to constraint programming, heuristic search, constructive (backtrack) search, iterative improvement (local) search, mixed-initiative systems and combinatorial optimization.",
      credits: "3",
      prerequisites: ["CMPT 225"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT  418",
      description: "Computationally-oriented theories of human cognitive architecture are explored, beginning with neurologically inspired (neural network) models of low-level brain processes, and progressing upwards to higher-level symbolic processing, of the kind that occurs in rule-following and problem solving. Arguments concerning the need for modular processing and combinatorially adequate forms of mental representation are examined at length.",
      comments: "",
      credits: "3",
      prerequisites: ["CMPT 225"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 419",
      description: "Machine Learning is the study of computer algorithms that improve automatically through experience. Machine learning algorithms play an important role in industrial applications and commercial data analysis. The goal of this course is to present students with both the theoretical justification for, and practical application of, machine learning algorithms. Students in the course will gain hands-on experience with major machine learning tools and their applications to real-world data sets. This course will cover techniques in supervised and unsupervised learning, neural networks / deep learning, the graphical model formalism, and algorithms for combining models. This course is intended for graduate students who are interested in machine learning or who conduct research in fields which use machine learning, such as computer vision, natural language processing, data mining, bioinformatics, and robotics. No previous knowledge of pattern recognition or machine learning concepts is assumed, but students are expected to have, or obtain, background knowledge in mathematics and statistics. A very strong mathematics background will be required for this course.",
      comments: ". It is strongly recommended that students have completed all CS major math requirements: MATH 151, 152, 240, MACM 316, STAT 270 with an A average. It is also recommended that students have taken some of MATH 251, 252, 254, 308, 309.",
      credits: "3",
      prerequisites: [],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 376W",
      description: "Covers professional writing in computing science, including format conventions and technical reports. Attention is paid to group dynamics, including team leadership, dispute resolution, cognitive bias, professional ethics and collaborative writing. Research methods are also discussed. The use of LaTeX and various version control tools are emphasized",
      credits: "3",
      prerequisites: ["CMPT 275"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 300",
      description: "This course aims to give the student an understanding of what a modern operating system is, and the services it provides. It also discusses some basic issues in operating systems and provides solutions. Topics include multiprogramming, process management, memory management, and file systems.",
      credits: "3",
      prerequisites: ["CMPT 225", "CMPT 295"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT 307",
      description: "Analysis and design of data structures for lists, sets, trees, dictionaries, and priority queues. A selection of topics chosen from sorting, memory management, graphs and graph algorithms.",
      credits: "3",
      prerequisites: ["CMPT 225", "MACM 201", "MATH 151/150", "MATH 232/240"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MACM 316",
      description: "A presentation of the problems commonly arising in numerical analysis and scientific computing and the basic methods for their solutions.",
      credits: "3",
      prerequisites: ["MATH 152","MATH 232/240"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MACM 401",
      description: "Data structures and algorithms for mathematical objects. Topics include long integer arithmetic, computing polynomial greatest common divisors, the fast Fourier transform, Hensel's lemma and p-adic methods, differentiation and simplification of formulae, and polynomial factorization. Students will use a computer algebra system such as Maple for calculations and programming.",
      credits: "3",
      prerequisites: ["CMPT 307"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MACM 416",
      description: "The numerical solution of ordinary differential equations and elliptic, hyperbolic and parabolic partial differential equations will be considered.",
      comments: ". It is strongly recommended that students have completed all CS major math requirements: MATH 151, 152, 240, MACM 316, STAT 270 with an A average. It is also recommended that students have taken some of MATH 251, 252, 254, 308, 309.",
      credits: "3",
      prerequisites: ["MACM 316"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MATH 308",
      description:"Linear programming modelling. The simplex method and its variants. Duality theory. Post-optimality analysis. Applications and software. Additional topics may include: game theory, network simplex algorithm, and convex sets",
      comments: "",
      credits: "3",
      prerequisites: ["MATH 150/151", "MATH 232/240"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "MATH 343",
      description: "Structures and algorithms, generating elementary combinatorial objects, counting (integer partitions, set partitions, Catalan families), backtracking algorithms, branch and bound, heuristic search algorithms.",
      comments: "MACM 201 (with a grade of at least B-). Recommended: knowledge of a programming language. Quantitative.",
      credits: "3",
      prerequisites: ["MACM 201"],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "CMPT  320",
      description: "An examination of social processes that are being automated and implications for good and evil, that may be entailed in the automation of procedures by which goods and services are allocated. Examination of what are dehumanizing and humanizing parts of systems and how systems can be designed to have a humanizing effect. Prerequisite: A CMPT course and 45 units. Breadth-Science",
      comments: "A CMPT course and 45 units. Breadth-Science is required.",
      credits: "3",
      prerequisites: [],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "B-HUM",
      description: "GA 101, GSWS 201 etc",
      comments: "",
      credits: "3",
      prerequisites: [],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "B-HUM",
      description: "GA 101, GSWS 201 etc",
      comments: "",
      credits: "3",
      prerequisites: [],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "B-SOC",
      description: "Gergo 101, HIST 209 etc",
      comments: "",
      credits: "3",
      prerequisites: [],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "B-SOC",
      description: "Gergo 101, HIST 209 etc",
      comments: "",
      credits: "3",
      prerequisites: [],
      rating: "easy",
      completed: false,
      enabled: true, //enabled if prereq's met
  },
  {
      title: "B-SCI",
      description: "BISC 101, BISC 201 etc",
      comments: "",
      credits: "3",
      prerequisites: [],
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
