class customers
{
   constructor(name,age,place,)
   {
        this.name=name;
        this.age=age;
        this.place=place;
   }

      details()
      {
        console.log(this.name);
        console.log(this.age);
    console.log(this.place)
      }
}

let c1=new customers("rajubai",55,"perumannular");
console.log(c1);
//------------------------------------------------------------
class customersSalem //class expression
{
   constructor(name,age,place)
   {
        this.name=name;
        this.age=age;
        this.place=place;
        console.log(`this is ${this.name} from ${this.place}and age is ${this.age}`)
    
   
    };
}
//let cs=new customersSalem(customersSalem.name);
let cs1=new customersSalem("prabu",55,"edapadi");
console.log(cs1);




let access=class {
    constructor(x , y )// instance variable 
     {
        this.x = x;
        this.y = y;
        console.log(this.x+this.y);
        return this.x+this.y;
    }
}

console.log(new access(4,6));

