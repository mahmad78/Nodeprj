//Promise example

const getTODo = ()=>{
    return new Promise((resolve, reject)=>{
       setTimeout(() => {
        let error = true;
        if (!error){
            resolve({Text:"Dowloaded!"})
        }
        else{
            reject("Error occured");
        }
       }, 2000);
    })
}

getTODo().then((res)=>{
    console.log(res.Text);
})
.catch((err)=>{
    console.log(err);
})

//end promise
//Callback example
// const getToDO = (callback)=>{
//     console.log("Downloading waiting pls....")
//     setTimeout(() => {
//         callback( {Text: "Downloaed! Done"});
//     }, 3000);
// }

// getToDO((res) =>{
//     console.log(res.Text);
// })

// console.log("First output");

// const display = (msg)=>{
//     console.log(msg)    
// }

// const calc = (num1, num2, callback)=>{
//     let res = num1 + num2;
//     callback(res);
// }

// calc(2,5, display);

// const calc1 = (num1, num2)=>{
//     let res = num1 + num2;
// }




//6const done = true;

// const prom = (done)=>{
//     console.log("Fetching data pls wait....");
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             if(done){
//                 resolve("Succesfful");
//             }
//             else{
//                 reject("Rejected");
//             }
//         }, 2000);
//     })
// }

// let onFulfilment = (result)=>{
    
// }

// let onRejection = (error)=>{
    
// }

// prom(false).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// });