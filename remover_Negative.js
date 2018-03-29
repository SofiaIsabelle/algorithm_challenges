var arr = [-3,-4,-5, 1, 2, 3, 4, 5, -6, -7];

function removeNegative(){
    for(var i = 0, temp; i < arr.length; i++){
        if(arr[i] < 0){
            tmp = arr[arr.length-1];
            arr[arr.length-1] = arr[i];
            arr[i] = tmp;
            arr.length = arr.length-1;
            i--;
        }
    }
    return arr;
}

console.log(removeNegative(arr));
