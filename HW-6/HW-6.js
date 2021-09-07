const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4],
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

console.warn("INPUT DATA:");
console.log(students);
console.warn("RESULTS:");

 // Function #1

function getSubjects(student) {
  const subjectsOfStudent = Object.keys(student.subjects);
  
  const subjects = subjectsOfStudent.map(subject => {
    const upperCaseSubject = (subject[0].toUpperCase() + subject.substring(1)).replace("_", " ");

    return upperCaseSubject.replace("_", " ");
    });
    return subjects;
  }         
  
console.log(`The subjects of Tanya are ${getSubjects(students[0])}.`)
  
   
 // Function #2 

function getAverageMark(student) {
  const marks = Object.values(student.subjects);
  const marksArray = marks.flat();
  const marksSum = marksArray.reduce((sum, current) => sum + current);

  return averageMark = +(marksSum / marksArray.length).toFixed(2);
}

console.log(`The average mark of Tanya is ${getAverageMark(students[0])}.` );
  
   
 // Function #3 

function getStudentInfo(student) {
  return studentInfo = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  }
}

console.log(`The information about Victor is: `, getStudentInfo(students[1]));
  
   
// Function #4
  
function getStudentsNames(array) {
  const studentsNames = array.map(person => {
    return person.name;
  });

  return studentsNames.sort();
}

console.log(`Studens' names in alphabet order are ${getStudentsNames(students)}.`);
  

// Function #5

function getBestStudent(array) {
  const allAverageMarks = [];

  array.forEach(student => {
    allAverageMarks.push(getAverageMark(student));
  });

  const maxAverageMark = Math.max(...allAverageMarks);
  const bestStudents = [];

  array.forEach(student => {
    if ( getAverageMark(student) === maxAverageMark) {
      bestStudents.push(student.name);
    }
  });

   return bestStudents;
}

console.log(`The best student(s) is(are) ${getBestStudent(students)}.`);


// Function #6

function calculateWordLetters(word) {
    const arrayFromWord = word.split('');
    let wordObject = {};
    
    arrayFromWord.forEach(letter => {
        wordObject[letter] = wordObject[letter] + 1 || 1;
    })
    
    return wordObject;
  }
  
console.log("Result for the word 'test': ", calculateWordLetters("test"));