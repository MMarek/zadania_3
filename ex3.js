function getPiNumber(n) {
    let pi = 0;
    let den = 1;

    for (let i = 0; i < n; i++) {
        let d1 = den;
        let d2 = den + 2;
        pi = pi + (1/d1 - 1/d2); // również pi += 1/d1 - 1/d2;

        den = d2 + 2;
    }
    return pi * 4;
}

const n = 5;
console.log(getPiNumber(n));
const nn = 50;
console.log(getPiNumber(nn));
const nnn = 500;
console.log(getPiNumber(nnn));
const nnnn = 5000;
console.log(getPiNumber(nnnn));
const nnnnn = 50000;
console.log(getPiNumber(nnnnn));