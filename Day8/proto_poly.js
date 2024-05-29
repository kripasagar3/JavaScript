let college={
    cname:"Deemed university",
    cplace:"Thanjavur",
    ccode:2233,
};

let admin={
    __proto__:college,
    
    branch:"Thanjavour",
    sid:function(sname,ccode,adno)
    {
       this.sname=sname;
       this.ccode=ccode;
       this.adno=adno;
       let id=sname+ccode+adno;
    
    return id;
    },
    
}

let student ={
    splace:"salem",
    sbranch:"bsc",
    sstay:"hostal",
};
console.log(`This college belongs to "${college.cname}" located in "${college.cplace}" and the pincode is "${college.ccode}"`);
console.log(`Student name is "${student.sname}" their respective branch is "${student.sbranch}" and he stay in "${student.sstay}"`)
student.__proto__=admin;

console.log(student.sid("basker",3345,22));

