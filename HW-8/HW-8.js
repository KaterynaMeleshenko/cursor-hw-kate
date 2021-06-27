// BASE

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

console.log('Get info:', ostap.getInfo());

console.log('Get marks:', ostap.getMarks);

ostap.setMarks = 5;
console.log('Get new marks:', ostap.getMarks);

console.log('Avarage mark is', ostap.getAverageMark());

console.log('* * * Dissmissing a student and attempt to put him a mark * * *')
console.log(ostap.dismiss());
ostap.setMarks = 4;
console.log(ostap.getMarks); 

console.log('* * * Recovering a student and attempt to put him a mark * * *')
console.log(ostap.recover());
ostap.setMarks = 3;
console.log(ostap.getMarks);


// ADVANCED