let sname="naveen";
let age=55;
let rollno=Number("20BRIE2");

function disp(){
console.log("hi"+sname);  //function declaration
console.log("your age is"+age);
console.log("your rollno"+rollno);
}disp();


let teacher=function (tname="saravanan",tid)
{
    return tname,tid;   //functional expression
};
console.log(teacher(2345));


let astaff=(namw,id,age)=>("staffname"+"ram" +"id"+345 +"age"+35);
console.log(astaff());//aerrow function

function stData(name,roll,age,place,...args)
{
    console.log(name);
    console.log(roll);
    console.log(age);
    console.log(place);
    //console.log(args);
    for(i=0;i<args.length;i++)
        {
            console.log(args[i]);
        }


    };
stData("ram",2345,33,"chennai","rs rosd",954546373,"single");

