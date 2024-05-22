function car(model,name,type,)
{
    this.model=model;
    this.name=name;
    this.type=type;
}
c1=new car(2245,"swift","4seater")
console.log(c1.name);

///////////////
 bike={
    bmodel:234,
    bname:"duke",
    bspeed:300
};
console.log(bike);
/////////////////}
let b1 =Object.create(bike)//create object method 

 b1.bmodel=222
 b1.bname="pulser"
 b1.bspeed=180
console.log(b1);

let employee={
    ename:"ramesh",
    eid:333,
    "e place":"coimbatore",
    eage:function()
    {
   let cage=new Date().getFullYear()
     let eage=cage-this.dob
    console.log(eage)
    }
}
console.log(employee);

let e1=Object.create(employee)

    e1.name="prabu",
    e1.eid=3434,
    e1.dob=2003,
console.log(e1.eage());



let e2=Object.create(employee)


e2.name="manoj",
e2.eid=2232,
e2.dob=2000,
console.log(e2.eage());




let branch={
    1:"Tamilnadu",
    3:"kerala",
    4:"Andra",
    2:"Europe"
}
for(i in branch)
    {
        console.log(branch[i]);
    }