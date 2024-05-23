const student={};
Object.defineProperty(student,"name",{value:"ramesh",writable:false});


console.log(student.name);
Object.student,"name",{value:"balu",writable:false};
console.log(student.name);

const student1={

    sname:"babu",
    age:23,
    place:"chennai",
    
};

Object.freeze(student1)

console.log(student1);
student1.age=33;

//Object.defineProperty(student1,"school",{value:"EVS school"})
let disp=Object.entries(student1)

console.log(disp);

const student2=Object.create(student1);
student2.sname="harish";

console.log(student2.sname,{value:"harish"});

