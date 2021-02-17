// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    var array = [];
    for (var i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (var j = 0; j < matrix[i].length; j++) {
                array.push(matrix[i][j]);
            }
        } else {
            matrix[i] = matrix[i].reverse();
            for (var j = 0; j < matrix[i].length; j++) {
                array.push(matrix[i][j]);
            }
        }
    }
    return array;
};
