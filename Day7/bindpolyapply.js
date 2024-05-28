let studet={
  name:"balaji",
  age:25,
  
};
let student2={
    name:"jeeva",
    age:function(sage)
    {
        this.sage=sage;
      return(this.sage);
    },
}
let c=student2.age.call(studet,35);
console.log(c);