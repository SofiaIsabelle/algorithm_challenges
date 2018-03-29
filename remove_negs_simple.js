function removeNeg(arr){
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            newArr[newArr.length] = arr[i];
        }
    }
    arr = newArr;
    return arr;
}

console.log(removeNeg([1,2,-3, 7, -9]));