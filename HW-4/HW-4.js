const students = ["Oleksandr", "Ihor", "Olena", "Ira", "Oleksiy", "Svitlana"];
const themes = ["Defferential equation", "Automata theory", "Algorythms and data's structures"];
const marks = [4, 5, 5, 3, 4, 5];

// Task #1: Pairs

function getPairs(students) {
    const allPairs = [];
    allPairs.push([students[0], students[2]]);
    allPairs.push([students[1], students[3]]);
    allPairs.push([students[4], students[5]]);
    return allPairs;
}

console.log(getPairs(students));

// Task #2: Themes

function setThemes(students, themes) {
    const allThemes = [];
    for (let i = 0; i < themes.length; i++) {
        allThemes.push([getPairs(students)[i], themes[i]])
    }
    return allThemes;
}

console.log(setThemes(students, themes));

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

function setRandomMarks(students, themes) {
    const randomMarks = [];
    for (let i = 0; i < setThemes(students, themes).length; i++) {
        const mark = Math.trunc(Math.random()*(5-1+1)+1);
        randomMarks.push([setThemes(students, themes)[i], mark]);
    }
    return randomMarks;
}

console.log(setRandomMarks(students, themes));