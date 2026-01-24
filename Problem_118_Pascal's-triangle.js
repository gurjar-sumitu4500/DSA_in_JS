// var generate = function (numRows) {
//     let arr = [[1], [1, 1]];
//     let i = 1;
//     while (i < numRows) {
//         arr.push([1]);
//         for (let j = 0; j < arr[i].length - 1; j++) {
//             arr[i + 1].push(arr[i][j] + arr[i][j + 1]);
//         }
//         arr[i + 1].push(1);
//         i++;
//     }
//     return arr;
// }

var generate = function (numRows) {
    if (numRows == 0) return [];
    let arr = [[1]];
    for (let i = 1; i < numRows; i++) {
        const row = [1];
        for (let j = 1; j < i; j++) {
            row.push(arr[i - 1][j - 1] + arr[i - 1][j]);
        }
        row.push(1);
        arr.push(row);
    }
    return arr;
}
console.log(generate(5));

// Or else in order to directly find just a single row elements let's say 5th row we can make use of binomial coefficient formulae