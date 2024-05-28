let customer1={
    name:"prabu",
    place:"Erode",
    age:2000,

};
 let customer2={
    name:"jeeva",
    place:"salem",
    age:2003,
 };

 let details={
    dispid:function()
    {
      let  id=this.name+'@'+123;
        console.log(id);
    },
    dispdate:function()
    {
       let dob=new Date().getFullYear()-(this.age);
       console.log(dob);
    },
 };
console.log(`customer name is ${customer1.name} and their place is ${customer1.place}`);
details.dispid.bind(customer1)();
details.dispdate.bind(customer1)();


console.log(`customer name is ${customer2.name} and their place is ${customer2.place}`);
details.dispid.bind(customer2)();
details.dispdate.bind(customer2)();





