class customer
{
    constructor(name,age,place)
    {
        this.name=name;
        this.age=age;
        this.place=place;

    }

    dispcustome()
    {
    return(`${this.name} ${this.age} ${this.place}`);
    }
}
let c1=new customer("subash",33,"ooty");

//////////////////////////////////

seller.prototype=c1;
function seller(id,number)
{
    this.id=id;
    this.number=number;
}
seller.prototype.dispseller=function()
{
    return(`${this.id}  ${this.number}`);
}
let s= new seller(33,9876543212);
console.log(s.dispcustome());
console.log(s.dispseller());



