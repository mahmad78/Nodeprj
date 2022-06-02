const a = {
    b:"this is test var",
    
    add:(c, d)=>{
        let a=c, b =d;
        console.log(a+b);
        //return a + b;
    },

    Sub:(c, d)=>{
        let a=c, b =d;  

        console.log(a-b);
    }
};

module.exports = a;



