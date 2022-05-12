const minimum = (n, arr, l, h) => {
    let mid
    while (l <= h) {
        mid = l + Math.floor((h - l) / 2)
        if (arr[mid] > arr[h]) {
            l = mid + 1
        }
        else if (arr[mid] < arr[h]) {
            h = mid
        }
        else
            h--;
    }
    return mid;
}
const bs = (n ,arr , l , h,k)=>{
    //console.log()
    while(l<=h)
    {
        let m = l+Math.floor((h-l)/2);
       console.log("m,arr[m]",m,arr[m]);
        if(arr[m]===k)
        {
            console.log(m)
            return true;
        }
        else if(arr[m]<k)
        {
            l = m+1
        }
        else
        h=m-1;
    }
    return false;
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);

    let   mid = minimum(n, arr, 0, n - 1)
    if (!(bs(n, arr, 0, mid - 1, k) || bs(n, arr, mid, n, k)))
        console.log("-1")
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`5 1
3 4 5 1 2`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}