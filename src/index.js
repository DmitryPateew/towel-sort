// You should implement your task here.

module.exports = function towelSort(matrix) {
    let mass = []
    if (matrix !== undefined && matrix.length) {
        for (let x of matrix) {
            matrix.indexOf(x) % 2 ? x.sort((a, b) => b - a) : x.sort((a, b) => a - b);
            mass.push(...x);
        }
        return mass;
    } else {
        return [];
    }
}
