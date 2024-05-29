integer=function(num)
{
     num++;
     console.log(num);
     //setTimeout(integer,2000,)
}

 let st=setTimeout(integer,2000,5)
 clearTimeout(st);
 setTimeout(integer,2000,5)
