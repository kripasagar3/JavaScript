let sname="ram";
console.log(sname);
let pass="kripasagar@123";
   let rec=String(pass);
   if(rec==(rec.length>=8)&& ('@')||('#')||('$')||('&'))
    {
        console.log("your password is correct");
    }
    else 
    {
        console.log("Enter a password with requirements");
    }

    let mark=50

   res=( mark<=40 ? "you need to reappear": 
    mark>=40 && mark<60 ?"Firts class":
    mark>=60 && mark<80  ?"A+ Grade":
    mark>=90 && mark<100 ? "O grade" :"please check the mark");
    console.log(res)

