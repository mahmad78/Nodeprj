
const datas = [
    {name:'Ali', address:'Lahore'}, 
    {name:'Ahmad', address:'SKP'}    
];

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
        
    }, 2000);
    
}

Createdata({name:'Asif', address:'Guj'}, FillList);
//FillList();