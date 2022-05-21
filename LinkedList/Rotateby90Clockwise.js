function rotateBy90Clockwise(N, arr) {
    //write code here
    for (let i = 0; i < Math.floor(N / 2); i++) {
        for (let j = i; j < N - i - 1; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[N - j - 1][i];
            arr[N - j - 1][i] = arr[N - i - 1][N - j - 1];
            arr[N - i - 1][N - j - 1] = arr[j][N - i - 1];
            arr[j][N - i - 1] = temp;
        }
    }
    for (let i = 0; i < N; i++)
        console.log(arr[i].join(" "));
}
