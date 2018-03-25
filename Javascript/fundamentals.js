/* Biggie Size : Write a function that changes all positive numbers in the array to "big". Example:
makseItBig([-1,3,5,-5]) returns that same array changed to ([-1, "big", "big", -5]) */


function biggieSize(array){
    length = array.length;
    for(var i = 0; i < array.length; i++){
        if(array[i] > 0){
            array[i] = "big";
        }
    }
    return array;
}

console.log(biggieSize([-3, -1, 5, 6, 7, 8, -2, -5]));


/* Reverse an Array */

function reverseArr(arr){
    var reverseArray = arr.reverse();
    return reverseArray;
}

console.log(reverseArr([1,2,3,4,5,6,7,8,9]));

/* Reverse a String */
function reverseString(str){
    //Use the split method to convert string into array
    var splitString = str.split("");
    //Use the reverse method to reverse your new array
    var reverseArray = splitString.reverse();
    //Use the join method to join all elements of the array into a string
    var joinArray = reverseArray.join("");

    return joinArray;
}

console.log(reverseString("helloyellowpillow"));

/* Reverse a String : More Advanced Version , done by chaing three methods together */

function reverseStr(str){
    return str.split("").reverse().join();
}

console.log(reverseStr("hello"));

/* Double It Function */

function doubleIt(num){
    return num * 2; 
}

console.log(doubleIt(25));