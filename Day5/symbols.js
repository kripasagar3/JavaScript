let student={
    name:"harish",
    age:22,
    place:"tirupur"
}
console.log(Object.getOwnPropertyNames(student));
///////

let tname=Symbol ('symb1');
let age=Symbol('symb2')
let teacher={
    [tname]:"prasath",
    place:"salem",
    [age]:23,
}
console.log(Object.getOwnPropertySymbols(teacher));
console.log(teacher);
console.log(teacher[tname]="harish");
console.log(teacher);
console.log(delete teacher[tname]);
console.log(teacher);
