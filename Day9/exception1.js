let entry={
 calage:function(dob)
{
  let d= new Date().getFullYear();
  
    year=d-dob;
    return year;    
},
};

let persion={
    name:"ram",
    place:"salem",
    Age:()=>
        { 
            age=this.year;
            try{
          if(age<18)
            {
            console.log("your age is not eligible");
            }
            else{
                console.log("you are eligible for vote");
            }
            
          }catch(e){console.log(e);}
          finally
          {
            console.log("thank you");
          }
        }
    

}
console.log(persion.name);
console.log(persion.place);

let x=persion.Age.bind(entry.calage);
x(2000);
//console.log(x);
