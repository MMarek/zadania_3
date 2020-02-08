const sinus = function (x, iterNum) {
    let power = 1;
    let a;
    let b;
    let division;
    const array = [];

    let sin = 0;

    for (let i = 1; i <= iterNum ; i++) {
        a = Math.pow(x, power);
        b = 1;
        for (let j = 1; j <= power; j++) {
            b= b * j;
        }
        power += 2;

        division = a/b;
        array.push(division);
    }
    for (let i = 0; i < iterNum; i++) {
        if(i%2 === 0){
            sin += array[i];
        }else{
            sin -= array[i];
        }
    }
    return sin;
};

console.log(sinus(7, 10));