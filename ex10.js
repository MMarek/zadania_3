const arrayToSort = [135, 24, 6, 46, 8, 246, 4];

function sortArray(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    return array;
}

console.log(sortArray(arrayToSort));