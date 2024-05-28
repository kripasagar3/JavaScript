//find ascii value
function findAscii(...char)// spread parameter
{

 for (i of char)
    {
        let ch=i.charCodeAt();
   console.log(`The ASCII value for ${i} is ${ch}`);
    }
};

findAscii('A','w','J','f','S','U','D','j','R');



