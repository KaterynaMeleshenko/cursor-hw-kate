// BASE

// 1
class Student {
  constructor(university, course, fullName, allMarks = [5, 4, 4, 5], status = 'studies') {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.allMarks = allMarks;
    this.status = status;
  }

  getInfo() {
     if (this.status == 'studies' || this.status == 'recovered') {
     return `Student of the ${this.course} course of ${this.university}, ${this.fullName}`;
     } else {
         return "This student is not studying here anymore";
     }
  };

  get getMarks() {
    if (this.status == 'studies' || this.status == 'recovered') {
      return this.allMarks;
    } else {
      return null;
      }
  };

  set setMarks(mark) {
    if (this.status == 'studies' || this.status == 'recovered') {
      return this.allMarks.push(mark);
    }
  }

  getAverageMark() {
    const marksSum = this.allMarks.reduce((sum, current) => {
      return sum + current;
    })

    return marksSum / this.allMarks.length;
    }

  dismiss() {
    this.status = 'expelled';

    return this.getInfo();
  };

  recover() {
    this.status = 'recovered';

    return `The student ${this.fullName} is recovered`;   
  };
}

const ostap = new Student("Hight school of the psychteraphy, Odessa", "first", "Ostap Rodomanskiy Bender");

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
    university, course, fullName, allMarks = [5, 4, 4, 5], status = 'studies', superStatus = 'budget', 
    scholarship = 1400) {
      super (university, course, fullName, allMarks = [5, 4, 4, 5], status = 'studies')
  
      this.superStatus = superStatus;
      this.scholarship = scholarship;
      setInterval(() => this.getScholarship(), 10000);
    }
      
  getScholarship() {
    if (this.superStatus === 'budget' & this.getAverageMark() >= 4 & this.status !== 'expelled') {
      console.log(`${this.fullName} received ${this.scholarship} grn of scholarship`)
    } else if (this.superStatus === 'budget' & this.getAverageMark() < 4 & this.status !== 'expelled') {
      console.log(`${this.fullName} can't receive their scholarship as their average mark is ${this.getAverageMark()} 
        that is less than 4`)
    } else if (this.status === 'expelled') {
      console.log(`${this.fullName} doesn't receive their scholarship anymore as they are expelled`);
    }
  }
}

const kate = new BudgetStudent('Odessa National Maritime University', 'fifth', 'Meleshenko Ekaterina');
const anton = new BudgetStudent('Odessa National Economic University', 'forth', 'Vuchkan Anton');
anton.allMarks = [2, 3, 4, 3];
const bogdan = new BudgetStudent('Odessa National Economic University', 'third', 'Bogdan Chop');
bogdan.status = 'expelled';
