const teacher={
    
    tname:"suresh",
    age:33,
    place:"coimbatroe",
    subject:"maths",
};

Object.defineProperty(teacher,"qualification",{value:"B.ed",writable:false});

Object.seal(teacher);

console.log(teacher);
delete teacher.age;

console.log(teacher);
