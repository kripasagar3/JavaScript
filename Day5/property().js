// let student={
//     name:"ramesh",
//     age:22,
//     place:"salem"
// };
// console.log(student);
// console.log(Object.getOwnPropertyNames(student));
// console.log(student.name="simbu");//it is mutable 
// console.log(student);


//

let naame=Symbol('name');//it is immutable.
let dob=Symbol('dob');
let present=Symbol('present');
let experince=Symbol('experince');
let teacher={
    [naame]:"prasath",
    age:33,
    [dob]:2000,
    [present]:true,
    [experince]:[
        23,43,443,]
    
    
};
console.log(Object.getOwnPropertySymbols(teacher));


console.log(delete teacher.dob);
//teacher.name="prabu";
console.log(teacher);
console.log(teacher);

for (let key in teacher) {
    console.log(`${key}:`,key);
}


///////////////////////////////////////////////////////////
