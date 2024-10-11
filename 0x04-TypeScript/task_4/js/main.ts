// task_4/js/main.ts

/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

// Creating and exporting constants for each subject
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

// Creating a Teacher object with experienceTeachingC
const cTeacher: Subjects.Teacher = {
  firstName: "Alice",
  lastName: "Smith",
  experienceTeachingC: 10
};

// Cpp Subject Logging
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements()); // Should print requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Should print available teacher or no available teacher

// Java Subject Logging
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements()); // Should print requirements for Java
console.log(java.getAvailableTeacher()); // Should print available teacher or no available teacher

// React Subject Logging
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements()); // Should print requirements for React
console.log(react.getAvailableTeacher()); // Should print available teacher or no available teacher

