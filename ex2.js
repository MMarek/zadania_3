function primeNumber(n) {
    let counter = 0;
    let boolean;

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        let modulo = n % i;
        if(modulo === 0){
            counter ++;
        }
    }
    if(counter > 1){
        boolean = false;
    }else{
        boolean = true;
    }
    return boolean;
}

console.log('Number 1 is ' + primeNumber(1));
console.log('Number 2 is ' + primeNumber(2));
console.log('Number 3 is ' + primeNumber(3));
console.log('Number 4 is ' + primeNumber(4));
console.log('Number 5 is ' + primeNumber(5));
console.log('Number 6 is ' + primeNumber(6));
console.log('Number 7 is ' + primeNumber(7));
console.log('Number 8 is ' + primeNumber(8));
console.log('Number 9 is ' + primeNumber(9));
console.log('Number 10 is ' + primeNumber(10));
console.log('Number 11 is ' + primeNumber(10));