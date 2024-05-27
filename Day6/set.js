let statu=new Set();

statu.add("pencil",15);
statu.add("pen",34);
statu.add("paper",2);
statu.add("sharpner",45);
statu.add("eraser",5);
statu.add("scale",15);

for(j in statu){

return statu[j];
}

console.log(statu);

statu.delete("paper");

statu.add("color",25);

console.log(statu);
console.log(typeof(statu));

