
var filter = (numss)=>{
    let _Nums = [];
    for(const nm of numss){
        if(nm % 2 == 0)
            _Nums.push(nm);
    }
    
    return _Nums;
}


// function filter(numbers) {
//     let results = [];
//     for (const number of numbers) {
//       if (number % 2 != 0) {
//         results.push(number);
//       }
//     }
//     return results;
//   }