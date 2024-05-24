let disp=class peoples
{

    constructor(name,age,place,...ags)
    {
       this.name=name;
       this.age=age;
       this.place=place;
       this.ags=ags;
       console.log(`${this.name}your age is ${this.age} and you from ${this.place}and your mobil number ${this.ags}`);
    }
    
    
}
console.log(new disp("ram",33,"tutucorin",9876543211));