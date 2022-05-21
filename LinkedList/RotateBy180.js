function rotateBy180(N, matrix) {
    //write code here
    for (let i = N - 1; i >= 0; i--) {
        console.log(matrix[i].reverse().join(" "))
    }

}
