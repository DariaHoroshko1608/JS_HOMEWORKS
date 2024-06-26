import Student from "./student.js";

// Створення екземплярів студентів
const student1 = new Student("Іван", "Іванов", 2000);
const student2 = new Student("Ольга", "Петрова", 1999);
const student3 = new Student("Андрій", "Сидоров", 2001);

// Використання методів
student1.grades.push(95, 88, 92);
student1.present();
student1.present();
student1.absent();
console.log(`Вік студента: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Середня відвідуваність: ${student1.getAverageAttendance()}`);
console.log(student1.summary());

student2.grades.push(85, 78, 90);
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
console.log(`Вік студента: ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getAverageGrade()}`);
console.log(`Середня відвідуваність: ${student2.getAverageAttendance()}`);
console.log(student2.summary());

student3.grades.push(70, 60, 65);
student3.absent();
student3.absent();
student3.absent();
console.log(`Вік студента: ${student3.getAge()}`);
console.log(`Середній бал: ${student3.getAverageGrade()}`);
console.log(`Середня відвідуваність: ${student3.getAverageAttendance()}`);
console.log(student3.summary());
