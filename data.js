
exports.Numbers = () => {
    let mums = [1,2,3,4,5,6,7,8,9,10];
    return mums;
}

exports.filter = (numss)=>{
    let _Nums = [];
    for(const nm of numss){
        if(nm % 2 == 0)
            _Nums.push(nm);
    }
    
    return _Nums;
  }
    
  

