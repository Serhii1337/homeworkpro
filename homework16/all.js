function Student(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25);
}

Student.prototype.getAge = function() {
    return new Date().getFullYear() - this.birthYear;
}

Student.prototype.getAverageGrade = function() {
    if(this.grades.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
    }
    return sum / this.grades.length;
}

Student.prototype.present = function() {
    for(let i = 0; i < this.attendance.length; i++) {
        if(this.attendance[i] !== true && this.attendance[i] !== false) {
            this.attendance[i] = true;
            return;
        }
    }
    console.log(`Всі заняття відмічені`);
}

Student.prototype.absent = function() {
    for(let i = 0; i < this.attendance.length; i++) {
        if(this.attendance[i] !== true && this.attendance[i] !== false) {
            this.attendance[i] = false;
            return;
        }
    }
    console.log(`Всі заняття відмічені`);
}

Student.prototype.summary = function() {
    const avg = this.getAverageGrade();
    let presentLessons = 0;
    let allLessons = 0;
    for(let i = 0; i < this.attendance.length; i++) {
        if(this.attendance[i] === true || this.attendance[i] === false) {
            allLessons++;
            if(this.attendance[i]) presentLessons++;
        }
    }
    
    let attendanceRate;

    if (allLessons > 0) {
        attendanceRate = presentLessons / allLessons;
    } else {
        attendanceRate = 0;
    }

    if(avg > 90 && attendanceRate > 0.9) return `Молодець!`;

    if(avg < 90 && attendanceRate < 0.9) return `Редиска!`;

    return `Добре, але можна краще`;
}

const student1 = new Student('Василь', 'Шевченко', 2005, [93, 89, 99, 85, 96, 93, 89, 99, 85, 96, 93, 89, 99, 85, 96, 93, 89, 99, 85, 96, 93, 89, 99, 85, 96, ]);
const student2 = new Student('Ігор', 'Решетило', 2006, [82, 90, 87, 85, 95, 82, 90, 87, 85, 95, 82, 90, 87, 85, 95, 82, 90, 87, 85, 95, 82, 90, 87, 85, 95, ]);
const student3 = new Student('Денис', 'Руденко', 2004, [100, 86, 91, 78, 83, 100, 86, 91, 78, 83, 100, 86, 91, 78, 83, 100, 86, 91, 78, 83, 100, 86, 91, 78, 83, ]);

student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();

student2.absent();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.absent();

student3.present();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.present();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.present();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.present();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.present();
student3.absent();
student3.present();
student3.absent();
student3.absent();

console.log(`${student1.firstName} ${student1.lastName}, Age: ${student1.getAge()}`)
console.log(`${student2.getAverageGrade()}`);
console.log(`${student3.summary()}`);