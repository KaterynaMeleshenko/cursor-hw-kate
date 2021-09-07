const students = ["Oleksandr", "Ihor", "Olena", "Ira", "Oleksiy", "Svitlana"];
const themes = ["Defferential equation", "Automata theory", "Algorythms and data's structures"];
const marks = [4, 5, 5, 3, 4, 5];

console.warn("INPUT DATA:");
console.log("Students", students);
console.log("Themes", themes);
console.log("Marks", marks);
console.warn("RESULTS:");

// Task #1: Pairs

function getPairs(students) {
  const allPairs = [];

  allPairs.push([students[0], students[2]], [students[1], students[3]], [students[4], students[5]]);

  return allPairs;
}

const pairsOfStudents = getPairs(students);

console.log(getPairs(students));


// Task #2: Themes

function setThemes(themes) {
  const allThemes = [];

  for (let i = 0; i < themes.length; i++) {
    allThemes.push([pairsOfStudents[i].join(' and '), themes[i]])
  }

  return allThemes;
}

const studentsWithThemes = setThemes(themes);

console.log(setThemes(themes));


// Task #3: Marks

function setMarks(students, marks) {
  const allMarks = [];

  for (let i = 0; i < marks.length; i++) {
    allMarks.push([students[i], marks[i]])
  }

  return allMarks;
}

console.log(setMarks(students, marks));


// Task #4: Random mark for each pair

function setRandomMarks() {
  const randomMarks = [];

  for (let i = 0; i < studentsWithThemes.length; i++) {
    const mark = (maxMark, minMark) => {
      return Math.trunc(Math.random()*(maxMark - minMark + 1) + minMark);
    }

  randomMarks.push([...studentsWithThemes[i], mark(5, 1)]);
  }

  return randomMarks;
}

console.log(setRandomMarks());