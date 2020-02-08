const whatTypeOfNumber = function (n) {
    const array = [];
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let modulo = n % i;
        let divisor = n / i;
        if (modulo === 0) {
            array.push(divisor);
        }
    }
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
    }
    if (sum === n) {
        return "Doskonała";
    } else if (sum < n) {
        return "niekompletna";
    } else {
        return false;
    }
};

console.log('Liczba ' + 1 + ' jest ' + whatTypeOfNumber(1));
console.log('Liczba ' + 6 + ' jest ' + whatTypeOfNumber(6));
console.log('Liczba ' + 12 + ' jest ' + whatTypeOfNumber(12));