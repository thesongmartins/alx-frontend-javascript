// DirectorInterface definition
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface definition
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create an employee based on the salary argument
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute the correct task based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

// Example usage
const employee1 = createEmployee(200);
console.log(executeWork(employee1)); // Output: Getting to work (Teacher task)

const employee2 = createEmployee(1000);
console.log(executeWork(employee2)); // Output: Getting to director tasks (Director task)

console.log(teachClass('Math'));    // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History

