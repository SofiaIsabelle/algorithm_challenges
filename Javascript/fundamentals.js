/* Biggie Size : Write a function that changes all positive numbers in the array to "big". Example:
makseItBig([-1,3,5,-5]) returns that same array changed to ([-1, "big", "big", -5]) */


function biggieSize(array){
    length = array.length;
    for(var i = 0; i < length; i++){
        if(array[i] > 0){
            array[i] = "big";
        }
    }
    return array;
}

console.log(biggieSize([-3, -1, 5, 6, 7, 8, -2, -5]));