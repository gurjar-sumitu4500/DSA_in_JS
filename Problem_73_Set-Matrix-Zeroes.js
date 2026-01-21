var setZeroes = function (matrix) { // Initial version
    let m = matrix.length;
    let n = matrix[0]?.length;
    let setMatrix = function (i, j) {
        for (let x = 0; x < n; x++) {
            if (matrix[i][x] !== 0 && matrix[i][x] !== true) {
                matrix[i][x] = true;
            }
        }
        for (let y = 0; y < m; y++) {
            if (matrix[y][j] !== 0 && matrix[y][j] !== true) {
                matrix[y][j] = true;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                setMatrix(i, j);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === true) {
                matrix[i][j] = 0;
            }
        }
    }
};


var setZeroes = function (matrix) { //optimised version
    let m = matrix.length;
    let n = matrix[0]?.length;
    let zeroRows = new Set();
    let zeroColums = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                zeroRows.add(i);
                zeroColums.add(j);
            }
        }
    }
    zeroRows.forEach((val) => {
        for (let i = 0; i < n; i++) {
            matrix[val][i] = 0;
        }
    });

    zeroColums.forEach((val) => {
        for (let j = 0; j < m; j++) {
            matrix[j][val] = 0;
        }
    });
}

//Further optimised and true in place version using 0th row and 0th column to store
//details to be considered further