// function addArrays(array1, array2) {
//     let array = [];
//     let arrayA = array1;
//     let arrayB = array2;
//
//     if(array1.length <array2.length){
//         arrayA = array2;
//         arrayB = array1;
//     }
//     for (let i = 0; i < arrayB.length; i++) {
//         array[i] = arrayA[i] + arrayB[i];
//     }
//     for (let j = arrayB.length; j < arrayA.length; j++) {
//         array[j] = arrayA[j]
//     }
//     return array;
// }
//
// console.log(addArrays(arrayToAdd1, arrayToAdd2));

function addArrays(array1, array2) {
    let array = [];

    let arrayA = array1.length < array2.length ? array1 : array2;
    let arrayB = array1.length < array2.length ? array2 : array1;

    for (let i = 0; i < arrayA.length; i++) {
        array[i] = arrayB[i] + arrayA[i];
    }
    for (let j = arrayA.length; j < arrayB.length; j++) {
        array[j] = arrayB[j];
    }
    return array
}

let arrayToAdd1 = [2,4,6,8];
let arrayToAdd2 = [1,3,5,7,9];

console.log(addArrays(arrayToAdd1, arrayToAdd2));