function multiply(array) {
    let num = 1;
    for (let i = 0; i < array.length; i++) {
        num *= array[i];
    }
    return num;
}

const result = multiply([1,1,1,1,1,1,1,1,1,1,1,1]);
const result2 = multiply([2,2,2,2,2,2,2,2]);
const result3 = multiply([5,5,5]);
const result4 = multiply([2,5,8,10]);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);