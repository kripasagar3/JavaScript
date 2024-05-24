// creation of array and array method 
var car=new Array("maruthi","tata","benze","BMW","Audi");
console.log(car);

var car2=[
    "koenigsegg Agera",
    "mustang",
    "ferrari",
    "lamborgini",
];

console.log(car2);
var bike=[];
bike[0]="dream neo";
bike[1]="splender";
bike[2]="pulser";
bike[3]="re";
bike.push[6]="duke";
console.log(bike);
console.log(bike.length);

bike.forEach((key,value) => {console.log (`${key} -- ${value}`)});

for(let i of Object.entries(bike))
    {
        console.log(bike[i]);
    }
    let vehicle=car.concat(bike);
    //console.log(vehicle);

     bike[1]="gt";
     console.log(bike);
     car[1]="dodge charger";
     console.log(car);
     console.log(vehicle);

     bike.copyWithin(0,1);
     console.log(bike);