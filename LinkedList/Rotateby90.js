function rotateBy90(N, arr) {
    //write code here
    for (let i = 0; i < Math.floor(N / 2); i++) {
        for (let j = N - i - 1; j > i; j--) {
            // console.log(i,j)
            let temp = arr[i][j];
            //   console.log(temp)
            arr[i][j] = arr[j][N - i - 1];
            arr[j][N - i - 1] = arr[N - i - 1][N - j - 1];
            arr[N - i - 1][N - j - 1] = arr[N - j - 1][i];
            arr[N - j - 1][i] = temp;
        }
    }
    for (let i = 0; i < N; i++) {
        console.log(arr[i].join(" "));
    }
}
