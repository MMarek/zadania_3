function fibonacciNumber(n) {
    const array = [];

    if (n == 0) {
        return array;
    } else if (n == 1) {
        array.push(0);
        return array;
    } else if (n == 2) {
        array.push(0);
        array.push(1);
        return array;
    } else if (n > 2) {
        array.push(0);
        array.push(1);
        for (let i = 2; i <= n - 1; i++) {
            array.push(array[i - 2] + array[i - 1]);
        }
        return array;
    }
}

console.log(fibonacciNumber(5));
console.log(fibonacciNumber(0));
console.log(fibonacciNumber(1));
console.log(fibonacciNumber(2));
console.log(fibonacciNumber(15));

