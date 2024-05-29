student =function()
{
     console.log("hi students welcome to class A")
}

teacher=function(age,place)
{
  this.age=age;
  this.place=place;
  let dob=new Date().getFullYear()-age;

  console.log(dob,place);
}
setTimeout(student,1000) //set wihout parameters

setTimeout(teacher,3000,5,"salem")//set with parameters


setTimeout(() => {
   let time= new Date().toLocaleTimeString();//set time withun aerrow function
   console.log(time);
    
}, 2000);
