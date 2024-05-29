function recursive(x,n)
{
    if(n==1)
        {
            return x;
        }
        else{
            return x*recursive(x,n-1);
        }
}
console.log(recursive(2,5));

function factorial(n)
{
    if(n==1){
        return n;
    }
     else{
        return n*factorial(n-1);
     }

}
console.log(factorial(6));
