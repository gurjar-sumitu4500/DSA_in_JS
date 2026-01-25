var spiralOrder = function (matrix) {
    if (matrix.length == 0) return [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let output = [];
    while (top <= bottom && left <= right) {
        //top row
        for (let i = left; i <= right; i++) {
            output.push(matrix[top][i]);
        }
        top++;
        //right column
        for (let j = top; j <= bottom; j++) {
            output.push(matrix[j][right]);
        }
        right--;
        //bottom row
        if (top <= bottom) {
            for (let k = right; k >= left; k--) {
                output.push(matrix[bottom][k]);
            }
            bottom--;
        }
        //left column
        if (left <= right) {
            for (let l = bottom; l >= top; l--) {
                output.push(matrix[l][left]);
            }
            left++;
        }
    }
    return output;
}

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));