// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let curr = 1;
    const matrix = [];
    for(let i = 0; i < n; i++){
        matrix.push(new Array(n))
    }
    let rowStart = 0, rowEnd = matrix.length, colStart = 0, colEnd = matrix[0].length;
    while(rowStart < rowEnd && colStart < colEnd){
        if(rowStart === rowEnd){
            matrix[rowStart][colStart] = curr;
            break;
        }
        for(let i = colStart; i < colEnd; i++){
            matrix[rowStart][i] = curr;
            curr++;
        }
        for(let i = rowStart+1; i < rowEnd; i++){
            matrix[i][colEnd-1] = curr;
            curr++;
        }
        for(let i = colEnd-2; i >= colStart; i--){
            matrix[rowEnd-1][i] = curr;
            curr++;
        }
        for(let i = rowEnd-2; i > rowStart; i--){
            matrix[i][colStart] = curr;
            curr++
        }
        rowStart++;
        colStart++;
        colEnd--;
        rowEnd--;
    }
    return matrix;
}

module.exports = matrix;
