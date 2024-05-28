let customer={
    cname:"ram",
    cid:2455,
    place:"salem"

};

let bank={
    bname:"axis",
    bid:1122,
    bbranch:"3road",
    ifsc:function ()
    {
    code=this.cid+this.place;
       return code;
    },

};

let b=bank.ifsc.call(customer);
console.log(b);
