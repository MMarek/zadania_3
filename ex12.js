console.log("EXERCISE 12 PART 1:");

const task1 = [
    [2, 3],
    ["Marek", "Michał"],
    [true, false],
    [5, 6, 7, 8, 9],
    [14, 26, 38],
];

console.log(task1[3][4]);
console.log(task1[1].length);
console.log(task1[1][2]);

console.log("EXERCISE 12 PART 2:");

function print2DArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        const row = arr[i];
        for (let j = 0; j < row.length; j++) {
            console.log(row[j])
        }
    }
}

print2DArray(task1);