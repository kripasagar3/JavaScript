let checknum=new Promise (function(resolve,reject)
{ 
    num=44;
    x=Number.isInteger(num);
   
    if(x==true)
        {
         resolve ("you enter the valid num");
        }
        else{
            reject("you enter invalid number");
        }
    

});

async function even()
{    let res=await checknum;
     if(res==resolve)
        {
    if(num%2==0)
        {
            Promise.resolve();
        }
    }
        else{
            Promise.result();
        }
}
checknum.then(()=>{console.log("it is even num")}).catch(()=>{console.log("this is not an even number")});
