// BASE

// 1
class Student {
  constructor(university, course, fullName, allMarks, isStillStudent) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.allMarks = allMarks;
    this.isStillStudent = isStillStudent;
  }

  getInfo() {
     if (this.isStillStudent) {
     return `Student of the ${this.course} course of ${this.university}, ${this.fullName}`;
     } else {
         return "This student is not studying here anymore";
     }
  };

  get getMarks() {
    if (this.isStillStudent) {
      return this.allMarks;
    } else {
      return null;
      }
  };

  set setMarks(mark) {
    if (this.isStillStudent) {
      return this.allMarks = [...this.allMarks, mark];
    }
  }

  getAverageMark() {
    const marksSum = this.allMarks.reduce((sum, current) => {
      return sum + current;
    })

    return marksSum / this.allMarks.length;
    }

  dismiss() {
    this.isStillStudent = false;

    return this.getInfo();
  };

  recover() {
    this.isStillStudent = true;

    return `The student ${this.fullName} is recovered`;   
  };
}

const ostap = new Student("Hight school of the psychteraphy, Odessa", "first", "Ostap Rodomanskiy Bender", [5, 4, 4, 5], true);

console.warn("INPUT DATA:");
console.log("Student's info: ", ostap);

// 2
console.warn("BASE RESULTS:");
console.log('Get info:', ostap.getInfo());

// 3
console.log('Get marks:', ostap.getMarks);

// 4
ostap.setMarks = 5;
console.log('Get new marks:', ostap.getMarks);

// 5
console.log('Avarage mark is', ostap.getAverageMark());

// 6
console.error('Dissmissing a student and attempt to put him a mark')
console.log(ostap.dismiss());
ostap.setMarks = 4;
console.log(ostap.getMarks); 

// 7
console.error('Recovering a student and attempt to put him a mark')
console.log(ostap.recover());
ostap.setMarks = 3;
console.log(ostap.getMarks);


// ADVANCED

console.warn("ADVANCED RESULTS:")

class BudgetStudent extends Student {
  constructor (
    university, course, fullName, allMarks, isStillStudent, isBudgetStudent, scholarship) {
      super (university, course, fullName, allMarks, isStillStudent)
  
      this.isBudgetStudent = isBudgetStudent;
      this.scholarship = scholarship;
      setInterval(() => this.getScholarship(), 5000);
    }
      
  getScholarship() {
    if (this.isBudgetStudent && this.getAverageMark() >= 4 && this.isStillStudent) {
      console.log(`${this.fullName} received ${this.scholarship} grn of scholarship`)
    } else if (this.isBudgetStudent && this.getAverageMark() < 4 && this.isStillStudent) {
      console.log(`${this.fullName} can't receive their scholarship as their average mark is ${this.getAverageMark()} 
        that is less than 4`)
    } else if (!this.isStillStudent) {
      console.log(`${this.fullName} doesn't receive their scholarship anymore as they are expelled`);
    }
  }
}

const kate = new BudgetStudent('Odessa National Maritime University', 'fifth', 'Meleshenko Ekaterina',
  [5, 4, 4, 5], true, true, 1400);
const anton = new BudgetStudent('Odessa National Economic University', 'forth', 'Vuchkan Anton', [2, 3, 4, 3], true, true, 1400);
const bogdan = new BudgetStudent('Odessa National Economic University', 'third', 'Bogdan Chop', [5, 4, 4, 5], false, true, 1400);
