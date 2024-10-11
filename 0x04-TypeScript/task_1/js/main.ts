// Interface for Teacher
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract: boolean;
}

// Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// PrintTeacherFunction interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
};

// Interface for Student constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface defining methods for Student class
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of Student class
class Student implements StudentClass {
  private readonly firstName: string;
  private readonly lastName: string;

  // Constructor to initialize firstName and lastName
  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method for working on homework
  workOnHomework(): string {
    return 'Currently working';
  }

  // Method to display the student's first name
  displayName(): string {
    return this.firstName;
  }
}

// Example Usage
const student = new Student({ firstName: 'John', lastName: 'Doe' });
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
console.log(printTeacher('John', 'Doe')); // Output: J. Doe

