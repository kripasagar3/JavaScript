class buyer
{
    constructor(name,age,place)
    {
        this.name=name;
        this.age=age;
        this.place=place;
        this.didpBy();
    }
    didpBy()
    {
        console.log("buyer name"+this.name);
        console.log("buyer age"+this.age);
        console.log("buyer place"+this.place);
    }

}

class seller extends buyer
{
    constructor(name,age,place,id,number)
    {
        super(name,age,place);
        this.id=id;
        this.number= number;
        this.dispseller();


    


    }
    dispseller()
    {
        console.log("seller id"+this.id);
        console.log("seller id"+this.number);
       
    }
}
let d1=new seller("bhavani",22,"karur",2233,9876543212);
//d1.dispseller();