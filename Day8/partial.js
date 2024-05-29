function partialf(name,domain)
{
     name=[
        "ram",
        "sam",
        "prabu",
        "balu",
    ];
    let mail=[];
    for (let i of name)
        {
            let join=`${i}${domain}`;
            //console.log(join);
            mail.push(join);
            
        }
        console.log(mail);
        
}
let res=partialf.bind(null,null,"@gmail.com");
res();



