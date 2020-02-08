function distFromAvarage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const avg = sum / arr.length;

    const newArr = [];
    for (let i = 0; i <arr.length ; i++) {
        const num = Math.abs(arr[i] - avg);
        newArr[i] = num;
    }
    return newArr;
}

const res = distFromAvarage([1,2,3,4,5,6,7,8,9,10,11]);
console.log(res);
const res1 = distFromAvarage([1,1,1,1]);
console.log(res1);
const res2 = distFromAvarage([2,4,6,8,11,15,27,39]);
console.log(res2);