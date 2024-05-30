function excep(x,y)
{
       let z=x/y;
    try{
        if(y==0)
            {
                console.log("this is excetion");
            }
            else{
               console.log("your answer is",z);
            }
        }catch(c){console.log(c);}
        finally
        {
            console.log("after the execution of try catch");
        }
    }

excep(50,5);