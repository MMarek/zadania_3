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
console.log('Liczba ' + 2 + ' jest ' + whatTypeOfNumber(2));
console.log('Liczba ' + 3 + ' jest ' + whatTypeOfNumber(3));
console.log('Liczba ' + 4 + ' jest ' + whatTypeOfNumber(4));
console.log('Liczba ' + 5 + ' jest ' + whatTypeOfNumber(5));
console.log('Liczba ' + 6 + ' jest ' + whatTypeOfNumber(6));
console.log('Liczba ' + 7 + ' jest ' + whatTypeOfNumber(7));
console.log('Liczba ' + 8 + ' jest ' + whatTypeOfNumber(8));
console.log('Liczba ' + 9 + ' jest ' + whatTypeOfNumber(9));
console.log('Liczba ' + 10 + ' jest ' + whatTypeOfNumber(10));
console.log('Liczba ' + 11 + ' jest ' + whatTypeOfNumber(11));
console.log('Liczba ' + 12 + ' jest ' + whatTypeOfNumber(12));
console.log('Liczba ' + 13 + ' jest ' + whatTypeOfNumber(13));
console.log('Liczba ' + 14 + ' jest ' + whatTypeOfNumber(14));
console.log('Liczba ' + 15 + ' jest ' + whatTypeOfNumber(15));
console.log('Liczba ' + 16 + ' jest ' + whatTypeOfNumber(16));
console.log('Liczba ' + 17 + ' jest ' + whatTypeOfNumber(17));
console.log('Liczba ' + 18 + ' jest ' + whatTypeOfNumber(18));
console.log('Liczba ' + 19 + ' jest ' + whatTypeOfNumber(19));
console.log('Liczba ' + 20 + ' jest ' + whatTypeOfNumber(20));