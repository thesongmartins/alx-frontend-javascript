var task = false;
var task2 = true;

export default function taskBlock(trueOrFalse) {

  if (trueOrFalse) {
     const task = true;
     const task2 = false;
  }

  return [task, task2];
};
