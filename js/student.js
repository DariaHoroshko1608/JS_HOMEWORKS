function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.birthYear;
};

Student.prototype.getAverageGrade = function () {
  if (this.grades.length === 0) return 0;
  const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / this.grades.length;
};

Student.prototype.present = function () {
  const index = this.attendance.indexOf(null);
  if (index !== -1) this.attendance[index] = true;
};

Student.prototype.absent = function () {
  const index = this.attendance.indexOf(null);
  if (index !== -1) this.attendance[index] = false;
};

Student.prototype.getAverageAttendance = function () {
  const attendedClasses = this.attendance.filter((att) => att !== null).length;
  const totalPresent = this.attendance.filter((att) => att === true).length;
  return totalPresent / attendedClasses;
};

Student.prototype.summary = function () {
  const averageGrade = this.getAverageGrade();
  const averageAttendance = this.getAverageAttendance();

  if (averageGrade > 90 && averageAttendance > 0.9) {
    return "Молодець!";
  }
  if (averageGrade > 90 || averageAttendance > 0.9) {
    return "Добре, але можна краще";
  }
  return "Редиска!";
};

export default Student;
