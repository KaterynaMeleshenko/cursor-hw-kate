// BASE

// 1
class Student {
  constructor(university, course, fullName, allMarks, status) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.allMarks = allMarks;
    this.status = status;
  }

  getInfo() {
     if (this.status === true) {
     return `Student of the ${this.course} course of ${this.university}, ${this.fullName}`;
     } else {
         return "This student is not studying here anymore";
     }
  };

  get getMarks() {
    if (this.status === true) {
      return this.allMarks;
    } else {
      return null;
      }
  };

  set setMarks(mark) {
    if (this.status === true) {
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
    this.status = false;

    return this.getInfo();
  };

  recover() {
    this.status = true;

    return `The student ${this.fullName} is recovered`;   
  };
}

const ostap = new Student("Hight school of the psychteraphy, Odessa", "first", "Ostap Rodomanskiy Bender", [5, 4, 4, 5], true);

// 2
console.log('Get info:', ostap.getInfo());

// 3
console.log('Get marks:', ostap.getMarks);

// 4
ostap.setMarks = 5;
console.log('Get new marks:', ostap.getMarks);

// 5
console.log('Avarage mark is', ostap.getAverageMark());

// 6
console.log('* * * Dissmissing a student and attempt to put him a mark * * *')
console.log(ostap.dismiss());
ostap.setMarks = 4;
console.log(ostap.getMarks); 

// 7
console.log('* * * Recovering a student and attempt to put him a mark * * *')
console.log(ostap.recover());
ostap.setMarks = 3;
console.log(ostap.getMarks);


// ADVANCED

console.log('* * * Advanced * * *')

class BudgetStudent extends Student {
  constructor (
    university, course, fullName, allMarks, status, superStatus, scholarship) {
      super (university, course, fullName, allMarks, status)
  
      this.superStatus = superStatus;
      this.scholarship = scholarship;
      setInterval(() => this.getScholarship(), 5000);
    }
      
  getScholarship() {
    if (this.superStatus === true & this.getAverageMark() >= 4 & this.status === true) {
      console.log(`${this.fullName} received ${this.scholarship} grn of scholarship`)
    } else if (this.superStatus === true & this.getAverageMark() < 4 & this.status === true) {
      console.log(`${this.fullName} can't receive their scholarship as their average mark is ${this.getAverageMark()} 
        that is less than 4`)
    } else if (this.status === false) {
      console.log(`${this.fullName} doesn't receive their scholarship anymore as they are expelled`);
    }
  }
}

const kate = new BudgetStudent('Odessa National Maritime University', 'fifth', 'Meleshenko Ekaterina',
  [5, 4, 4, 5], true, true, 1400);
const anton = new BudgetStudent('Odessa National Economic University', 'forth', 'Vuchkan Anton', [2, 3, 4, 3], true, true, 1400);
const bogdan = new BudgetStudent('Odessa National Economic University', 'third', 'Bogdan Chop', [5, 4, 4, 5], false, true, 1400);
