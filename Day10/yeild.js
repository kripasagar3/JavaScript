function* disp()
{
  let num=0
  while(true)
    {
        yield num++;// yield is nothing but a controll of looping environment
    }
    
    
}
  let res=disp();
  console.log(res.next().value);
  console.log(res.next().value);
//  console.log(res.next().value);
//  console.log(res.next().value);
//  console.log(res.next().value);


function* -Yielddisp(){ 
    a=0;
    while(true)
        {
            yield a+=10;

        }}
    let z=Yielddisp();
console.log(z.next().value);
console.log(z.next().value);
console.log(z.next().value);
console.log(z.next().value);
