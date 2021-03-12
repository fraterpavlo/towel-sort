
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined){return [];} 
    else if (matrix.length == 0) {return []}
    else {
        for (let i = 1; i < matrix.length; i +=2) {
            function compareNumbers(a, b) {
                return b - a;};
            matrix[i] = matrix[i].sort(compareNumbers);
        };
        let newMatrix = matrix.flat(Infinity);
        return newMatrix;
    }
};
