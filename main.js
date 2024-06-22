var student1 = [
    { id: 1, name: "Misbah", age: 20 },
    { id: 2, name: "Aiesha", age: 19 },
    { id: 3, name: "Madiha", age: 18 },
    { id: 4, name: "Amna", age: 14 },
];
// USING MAP METHOD IN MANAGEMENT SYSTEM PROJECT
var studentName = student1.map(function (student) { return student.name; });
console.log("student Name :", studentName);
// USING FILTER METHOD IN MANAGEMENT SYSTEM PROJECT
var youngerStudent = student1.filter(function (student) { return student.age < 20; });
console.log("younger student:", youngerStudent);
