var rotate = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    // transpose -> swapping (i, j) -> (j, i)
    // transpose will convert the rows into columns but in reverse
    // this works only for n*n matrix 
    for (let i = 0; i < m; i++) {
        // start from the position not covered by the previous i.e j = i + 1
        // this is to avoid the repetition of the indexes already visited such as (0,1) -> (1,0)
        // when transforming a symmetric structure in-place, process only one side of the symmetry
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // reverse
    for (let i = 0; i < m; i++) {
        matrix[i].reverse();
    }
};



/*
In matrix i == j are diagonal
upper triangle are elements above diagonal (j > i) i.e (0, 1) , (0, 2), (1, 2)
lower triangle are elements below diagonal ( i > j) i.e (1, 0), (2, 0), (2, 1)
Upper triangle have a symmetry i.e lower triangle 
so during transposing only visit upper triangle it will automatically work for the shadow/symmetry lower triangle
*/