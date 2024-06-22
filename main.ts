//  PROJECT 7  STUDENT  MANAGEMENT SYSTEM
interface student {
    name : string;
    id   :  number;
    age  : number;
}
let student1 : student [] = [
     {id:1, name: "Misbah" ,age: 20},
     {id:2, name: "Aiesha", age: 19},
     {id:3, name: "Madiha", age: 18},
     {id:4, name: "Amna",   age: 14},

];
// USING MAP METHOD IN MANAGEMENT SYSTEM PROJECT
let studentName :string [] = student1.map(student=> student.name);
console.log("student Name :", studentName);

// USING FILTER METHOD IN MANAGEMENT SYSTEM PROJECT
let youngerStudent : student[]= student1.filter(student => student.age<20)
console.log("younger student:", youngerStudent);