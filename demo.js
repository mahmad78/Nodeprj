
const datas = [
    {name:'Ali', address:'Lahore'}, 
    {name:'Ahmad', address:'SKP'}    
];

//jUST CHecking status of git
const FillList = () => {    
    setTimeout(() => {
        var outPut = [];
        datas.forEach((item) =>{
             outPut += `<li>${item.name}</>`;
        })  
        
    //     outPut = datas.map((item) =>{
    //         return outPut = `<li>${item.name}</>`;
    //    })  
        console.log(outPut);   
        document.body.innerHTML = outPut;
    }, 1000);    
}

const Createdata = (newData, callback) =>{
    setTimeout(() => {
        datas.push(newData);
        callback();

        //Adding header

        //Adding for Wsksdj brachcn
        
    }, 2000);
    
}

Createdata({name:'Asif', address:'Guj'}, FillList);
//FillList();