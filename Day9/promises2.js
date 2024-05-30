new Promise (function(resolve,reject)
{
   var usern="rames";
   var pass="22@jbkhwkd";
   chek=pass.length;
    
    if(usern.endsWith("@gmail.com"))
        {
            if(pass=chek>=6 && '@'||'#'||'$'||'%'||'&'||'*')

                {
                    resolve();
                }
                else
                {
                    console.log("please enter valid password");
                }
        }
                else{
                       reject();
                //    ()=>
                //     {
                //      err2="if you not sure of user name please enter the mobile.no";
                //      return err2;
                //      }
                //  );
        }
})
.then(function()
{
    console.log("your userid   and pass matches");
})
.catch(function()
{
    console.log("if you not sure of user name please enter the mobile.no")
      console.log("no valid");
     setTimeout(()=>
        {
            console.log("if you not intrested click 'Exit' ");
    },5000);
});
