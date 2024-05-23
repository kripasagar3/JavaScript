//using object menthod
let student={
    sname:"prabu",
    sid:2212,
    dob:1990,
    sage()
    {
   return  (new Date().getFullYear()-student.dob);

    }
};
console.log(student.sage());

let s1=student;
    s1.sname="pavilan",
    s1.id=3212,
    s1.dob=2000,
    
    console.log(s1.sage());
    
    let s2=student;
    s2.sname="ramesh",
    s2.id=3234,
    s2.dob=2004,
    console.log(s2.sage());


