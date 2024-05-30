 new Promise((resolve,reject)=>
{
    let result="yes";  //if we give let it will access only in same block it will not go next block it will be in either var or nothing.
    if(result=="yes")
        {
            resolve();
        }

    else{
        reject();
    }
}).then(function()
{
    console.log("yes payment is succesful");
    console.log("this is your bill !! ! !");
}).catch(function()
{
    console.log("your payment is failed");
})