function getEvenAvarage(arr) {
    let num = 0;
    let count = 0;
    for (let i = 0; i <arr.length ; i++) {
        if(arr[i] % 2 === 0) {
            num += arr[i];
            count++
        }
    }
    if(count === 0) {
        return null
    }
    return num/count;
}

const resultX = getEvenAvarage([2,3,4,5,6,9,14]);
console.log(resultX);
const resultX2 = getEvenAvarage([1,1,1,1]);
console.log(resultX2);
const resultX3 = getEvenAvarage([1,2,3,4,5,6,7]);
console.log(resultX3);